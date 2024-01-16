import {
  FaTruck,
  FaWallet,
  FaMailBulk,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";

import { MdLoop } from "react-icons/md";
import Image from "next/image";
import LogoSvg from "@/public/logo.svg";

const Footer = () => {
  return (
    <section id="footer" className="bg-white">
      <div className="border-b border-t border-slate-200 pt-[60px] md:pt-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/3">
              <div className="mb-[60px] text-center md:mt-[60px]">
                <div className="mx-auto mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-lg text-4xl text-blue-600">
                  <FaTruck />
                </div>
                <div>
                  <h3 className="mb-[10px] text-xl font-semibold xl:text-2xl">
                    Free Delivery
                  </h3>
                  <p className="text-gray-600 max-w-[275px] mx-auto text-base">
                    Lorem ipsum dolor sit amet, consect adipiscing eliteget
                    lorem.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 md:border-x md:border-slate-200">
              <div className="mb-[60px] text-center md:mt-[60px]">
                <div className="mx-auto mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-lg text-4xl text-blue-600">
                  <FaWallet />
                </div>
                <div>
                  <h3 className="mb-[10px] text-xl font-semibold xl:text-2xl">
                    Online Payment
                  </h3>
                  <p className="text-gray-600 max-w-[275px] mx-auto text-base">
                    Lorem ipsum dolor sit amet, consect adipiscing eliteget
                    lorem.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3">
              <div className="mb-[60px] text-center md:mt-[60px]">
                <div className="mx-auto mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-lg text-4xl text-blue-600">
                  <MdLoop />
                </div>
                <div>
                  <h3 className="mb-[10px] text-xl font-semibold xl:text-2xl">
                    Easily Claim
                  </h3>
                  <p className="text-gray-600 max-w-[275px] mx-auto text-base">
                    Lorem ipsum dolor sit amet, consect adipiscing eliteget
                    lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[70px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 justify-center items-center">
            <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-3/12">
              <div className="mb-16 max-w-[270px]">
                <a className="inline-block mb-4 cursor-pointer" href="/">
                  <Image
                    src={LogoSvg}
                    alt="logo"
                    loading="lazy"
                    className="w-14 h-14"
                  />
                </a>
                <div className="space-y-4">
                  <p className="text-base text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis, placeat sed excepturi eius mollitia, totam ratione
                    praesentium veniam quia voluptates, deleniti iusto quasi!
                    Distinctio at, debitis quasi eligendi iure labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-9">My Account</h3>
                <ul className="space-y-3">
                  <li>
                    <a className="inline-block text-base text-gray-600 hover:text-blue-600 cursor-pointer">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a className="inline-block text-base text-gray-600 hover:text-blue-600 cursor-pointer">
                      Order History
                    </a>
                  </li>
                  <li>
                    <a className="inline-block text-base text-gray-600 hover:text-blue-600 cursor-pointer">
                      Order Tracking
                    </a>
                  </li>
                  <li>
                    <a className="inline-block text-base text-gray-600 hover:text-blue-600 cursor-pointer">
                      Shopping Cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-9">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-base">
                    <span className="pr-5 mt-1 text-3xl text-blue-600">
                      <FaMapLocationDot />
                    </span>
                    <span className="text-gray-600">
                      62/202, Village Natural, Pracha-u-tit-76, Thugkru,
                      Thugkru, Bangkok, 10140
                    </span>
                  </div>
                  <div className="flex items-center text-base">
                    <span className="pr-5 mt-1 text-3xl text-blue-600">
                      <FaPhoneVolume />
                    </span>
                    <span className="text-gray-600">(+66)098-848-2480</span>
                  </div>
                  <div className="flex items-center text-base">
                    <span className="pr-5 mt-1 text-3xl text-blue-600">
                      <FaMailBulk />
                    </span>
                    <span className="text-gray-600">
                      Ruengwut.Sais@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-3/12">
              <div className="mb-16">
                <h3 className="mb-10 text-2xl font-semibold">Download App</h3>
                <div className="sm:flex md:block lg:flex xl:block">
                  <button className="mr-3 mb-3 flex w-full max-w-[230px] items-center rounded-md bg-blue-600 px-5 py-2 hover:bg-blue-800">
                    <span className="block pr-[10px] text-5xl text-white">
                      <FaApple />
                    </span>
                    <span className="text-white">
                      <span className="text-sm">Download from</span>
                      <span className="block text-base font-semibold">
                        Apple Store
                      </span>
                    </span>
                  </button>
                  <button className="mr-3 mb-3 flex w-full max-w-[230px] items-center rounded-md bg-gray-900 px-5 py-2 hover:bg-gray-800">
                    <span className="block pr-[10px] text-4xl text-white">
                      <FaGooglePlay />
                    </span>
                    <span className="text-white">
                      <span className="text-sm">Download from</span>
                      <span className="block text-base font-semibold">
                        Google Play Store
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 border-t border-slate-200">
        <div className="container mx-auto">
            <div className="text-center">
                <div className="mb-5">
                    <img src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/footers/footer-04/payment.svg" alt="payment" loading="lazy" className="max-w-full mx-auto"/>
                </div>
                <p className="text-base text-body-color dark:text-dark-6">
                    © 2023 Rugnwut Saisawat. All Rights Reserved.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
