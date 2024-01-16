"use client";

import React, { useState, useEffect } from "react";
import { FaAngleDoubleLeft, FaStar, FaHeart, FaCartPlus } from "react-icons/fa";

interface ProductDetailProps {
    params: {
      productId: string;
    };
  }

  interface Product {
    id: number;
    description: string;
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

export default function ProductDetail({ params }: ProductDetailProps) {
  const id = params.productId;
  console.log(id);
  const [productDeep, setProductDeep] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`https://dummyjson.com/products/${id}`);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const productData = data;
        console.log(productData);
        setProductDeep(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const generateStarIcons = (rating:number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-amber-400 ${
            i <= rating ? "text-amber-400" : "text-gray-300"
          }`}
        >
          <FaStar />
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="min-h-screen py-12 sm:pt-20">
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className="w-full md:w-1/2 max-w-md border bg-white rounded-md shadow-lg">
          <div className="relative h-96">
            <div className="block overflow-hidden absolute inset-0 box-border m-0 rounded-t-md shadow-lg">
              <img
                src={productDeep?.thumbnail}
                alt="product-img"
                className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
              />
            </div>
          </div>
          <div className="relative flex shadow-lg">
            <div className="flex w-full overflow-auto border-t border-slate-200">
              <div className="flex">
                {productDeep.images &&
                  productDeep.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-40 h-40 flex-shrink-0 rounded-sm"
                    >
                      <div className="block overflow-hidden absolute inset-0 box-border m-0">
                        <img
                          src={image}
                          alt={`img-${index + 1}`}
                          className="absolute inset-0 box-border p-0 border-none object-fit m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
          <a
            href="/product"
            className="border border-blue-600 text-blue-600 text-xl font-semibold pt-2 pb-1 leading-relaxed flex justify-center items-center focus:ring-1 focus:ring-blue-100 focus:outline-none w-full hover:bg-blue-100 rounded-sm"
          >
            <div className="flex items-center justify-center gap-1">
              <FaAngleDoubleLeft />
              <p>Back to all products</p>
            </div>
          </a>
          <div>
            <h1 className="leading-relaxed font-extrabold text-3xl text-blue-600 py-2 sm:py-4">
              {productDeep.title}
            </h1>
            <p className="font-medium text-lg">{productDeep.description}</p>
            <p className="font-bold text-lg py-4">
              {productDeep.brand}, {productDeep.category}
            </p>
            <div className="flex items-center justify-start text-2xl py-4">
              <div className="text-amber-400 flex gap-1 items-center">
                {generateStarIcons(productDeep.rating)}
              </div>
              <span className="pl-1 text-sm text-start">
                ({productDeep.rating})
              </span>
            </div>
            <div className="item-center flex flex-wrap justify-start gap-4 py-4">
              <span className="inline-flex items-center justify-center rounded bg-blue-600 text-xl font-bold text-white p-2 w-20 h-10">
                -{Math.trunc(productDeep.discountPercentage)}%
              </span>
              <p className="font-bold text-4xl">${productDeep.price}</p>
            </div>

            <div className="w-full py-4">
              <div className="flex flex-col items-start space-y-1 flex-grow-0">
                <p className="text-gray-600 text-base">Quantity</p>
                <input
                  type="number"
                  inputMode="numeric"
                  name="quantity"
                  id="quantity"
                  placeholder="0"
                  min="0"
                  className="text-gray-600 form-input border border-gray-300 w-full focus:outline-blue-600 p-3 rounded-sm focus:border-blue-100 focus:ring-blue-100"
                />
                <p className="pt-2 text-gray-600">
                  {productDeep.stock} items in stock
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-start ">
              <button className="rounded-full border-2 border-blue-600 hover:border-blue-800 bg-blue-600 text-white hover:bg-blue-800 p-3 text-3xl transition duration-200">
                <FaCartPlus />
              </button>
              <button className="rounded-full border-2 border-slate-400 text-slate-400 hover:border-rose-600 hover:bg-rose-600 p-3 hover:text-white text-3xl transition duration-200">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
