"use client";

import { FaStar, FaHeart, FaCartPlus } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Link from "next/link";


interface Product {
  id: number;
  thumbnail: string;
  discountPercentage: number;
  title: string;
  brand: string;
  category: string;
  images: string[];
  price: number;
  rating: number; 
  stock: number;
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Function to generate yellow star icons based on the rating
  const generateStarIcons = (rating:number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-amber-400 ${i <= rating ? 'text-amber-400' : 'text-gray-300'}`}
        >
          <FaStar />
        </span>
      );
    }
    return stars;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=15");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const productData = data.products;
        console.log(productData);
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="pt-20 pb-8">
      <div className="flex-wrap gap-8 mx-auto flex h-auto w-full items-center justify-center">
        {products.map((product) => (
          <Link
            key={product.id}
            className="mb-10 bg-white rounded-lg shadow-lg w-80 cursor-pointer overflow-hidden"
            href={`/product/${product.id}`}
          >
            <div className="relative h-96 w-80 overflow-hidden">
              <img
                src={product.thumbnail}
                alt="product-img"
                className="w-full h-full object-cover duration-300 transition ease-in-out rounded-t-lg hover:scale-110"
              />
              <span className="absolute left-4 top-4 inline-flex items-center justify-center rounded bg-blue-600 px-[10px] py-[4px] text-md font-medium text-white">
                -{Math.trunc(product.discountPercentage)}%
              </span>
            </div>
            <div className="px-6 pt-6 pb-8 text-start w-80 h-80">
              <h3 className="xs:text-xl text-lg font-semibold block mb-[5px] whitespace-nowrap overflow-hidden overflow-ellipsis">
                {product.title}
              </h3>
              <h3 className="xs:text-xl text-lg font-semibold block mb-[5px]">
                {product.brand}
              </h3>
              <p className="text-lg">{product.category}</p>
              <p className="text-xl font-bold py-3">{product.price}$</p>
              <div className="flex items-center justify-start text-xl">
                <div className="text-amber-400 flex gap-1 items-center">
                  {generateStarIcons(product.rating)}
                </div>
                <span className="pl-1 text-sm text-start">
                  ({product.rating})
                </span>
              </div>
              <div className="flex gap-2 items-center justify-start pt-4">
                <button className="rounded-3xl border-2 border-blue-600 hover:border-blue-800 bg-blue-600 text-white hover:bg-blue-800 p-2 text-xl transition duration-200">
                  <FaCartPlus />
                </button>
                <button className="rounded-3xl border-2 border-slate-400 text-slate-400 hover:border-rose-600 hover:bg-rose-600 p-2 hover:text-white text-xl transition duration-200">
                  <FaHeart />
                </button>
              </div>
              <p className="py-4 text-gray-600">{product.stock} items in stock</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
