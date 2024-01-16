import Image from 'next/image'
import CategoryImg1 from "@/public/picture/category-1.jpg"
import CategoryImg2 from "@/public/picture/category-2.jpg"
import CategoryImg3 from "@/public/picture/category-3.jpg"
import CategoryImg4 from "@/public/picture/category-4.jpg"



const SectionCategory = () => {
    return (
        <section className="bg-slate-200 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="flex -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <h3 className="mb-4 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">Product Category</h3>
                            <p className="text-gray-600 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui reprehenderit rerum esse maxime aspernatur, molestias a magni earum voluptatem nemo! Ipsam, ad? Veniam, totam ad ducimus quam unde reiciendis?</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <a className="block mb-10 text-center group cursor-pointer">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <Image src={CategoryImg1} alt="category-img-1" loading="lazy" className="w-full h-80 object-cover shadow-lg"/>
                            </div>
                            <h3 className="mb-1 text-xl font-semibold group-hover:text-blue-600 md:text-2xl lg:text-xl xl:text-2xl">Accessories</h3>
                            <p className="text-gray-600 text-xl">10 Products Available</p>
                        </a>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <a className="block mb-10 text-center group cursor-pointer">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <Image src={CategoryImg2} alt="category-img-2" loading="lazy" className="w-full h-80 object-cover shadow-lg"/>
                            </div>
                            <h3 className="mb-1 text-xl font-semibold group-hover:text-blue-600 md:text-2xl lg:text-xl xl:text-2xl">Clothes</h3>
                            <p className="text-gray-600 text-xl">34 Products Available</p>
                        </a>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <a className="block mb-10 text-center group cursor-pointer">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <Image src={CategoryImg3} alt="category-img-3" loading="lazy" className="w-full h-80 object-cover shadow-lg"/>
                            </div>
                            <h3 className="mb-1 text-xl font-semibold group-hover:text-blue-600 md:text-2xl lg:text-xl xl:text-2xl">Furniture</h3>
                            <p className="text-gray-600 text-xl">58 Products Available</p>
                        </a>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <a className="block mb-10 text-center group cursor-pointer">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <Image src={CategoryImg4} alt="category-img-4" loading="lazy" className="w-full h-80 object-cover shadow-lg"/>
                            </div>
                            <h3 className="mb-1 text-xl font-semibold group-hover:text-blue-600 md:text-2xl lg:text-xl xl:text-2xl">Electronics</h3>
                            <p className="text-gray-600 text-xl">42 Products Available</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionCategory