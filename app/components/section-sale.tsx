import React from 'react';
import Image from "next/image";
import MainImg1 from '@/public/picture/main-1.jpg'
import MainImg2 from '@/public/picture/main-2.jpg'
import MainImg3 from '@/public/picture/main-3.jpg'


const SectionSale = () => {
  return (
    <section className='py-10 relative'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full px-4 lg:w-8/12'>
            <div className='relative mb-8 h-[370px] md:h-[480px]'>
              <Image src={MainImg1} alt='main-img-1' loading="lazy" className='object-cover w-full h-full opacity-90' />
              <div className='absolute top-0 left-0 flex items-center w-full h-full px-8 md:px-12'>
                <div className='max-w-[420px]'>
                  <h3 className='block mb-5 text-2xl font-bold sm:text-4xl cursor-pointer text-blue-600'>
                    Mega Sale Up To 50% 
                  </h3>
                  <p className='text-base text-body-color mb-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore odit excepturi aspernatur, autem mollitia pariatur earum ut facere fugit quam repellendus fugiat qui architecto, consequuntur quidem inventore ipsam ipsa provident.</p>
                  <button className='bg-blue-600 inline-flex items-center justify-center rounded-md py-[13px] px-7 text-center text-base font-medium text-white hover:bg-blue-800'>Shop now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-4/12'>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full px-4 md:w-1/2 lg:w-full'>
                <div className='relative mb-8 h-[223px]'>
                  <Image src={MainImg2} alt='main-img-2' loading="lazy" className='object-cover object-center w-full h-full opacity-90'/>
                  <div className='absolute top-0 left-0 flex items-end justify-end w-full h-full p-6 sm:p-9'>
                    <div className='max-w-[300px] text-right'>
                      <h3 className='block mb-3 text-xl font-bold xl:text-2xl'>
                        20% Off On Furniture 
                      </h3>
                      <a href="" className='text-xl font-medium hover:text-blue-600'>Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full px-4 md:w-1/2 lg:w-full'>
                <div className='relative mb-8 h-[223px]'>
                  <Image src={MainImg3} alt='main-img-3' loading="lazy" className='object-cover object-center w-full h-full opacity-90'/>
                  <div className='absolute top-0 left-0 flex items-end justify-end w-full h-full p-6 sm:p-9'>
                    <div className='max-w-[300px] text-right'>
                      <h3 className='block mb-3 text-xl font-bold xl:text-2xl'>
                        40% Off On Electronics 
                      </h3>
                      <a href="" className='text-xl font-medium hover:text-blue-600'>Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSale;
