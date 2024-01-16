import { FaStar, FaHeart,FaCartPlus } from "react-icons/fa";

const SectionCarousal = () => {
  return (
    <section className="pt-20 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[65px] max-w-[510px] text-center">
              <h2 className="dark:text-white mb-4 text-3xl font-bold sm:text-4xl md:leading-[1.2] md:text-[40px]">
              Top Seller
              </h2>
              <span className="bg-blue-600 mx-auto mb-[18px] block h-[3px] w-[100px]"></span>
              <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore doloribus repudiandae amet odio tempora. Illum, ab
                officia amet fugiat exercitationem eum quisquam itaque ad
                reprehenderit. Velit soluta quibusdam labore quidem.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-full pb-14">
            <div className="flex-no-wrap snap xs:max-w-[400px] mx-auto flex h-auto w-full max-w-[300px] overflow-auto transition-all sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
              <div className="xs:min-w-[368px] mx-auto h-full min-w-[300px] flex gap-4 px-4 sm:min-w-[510px] md:min-w-[340px] lg:min-w-[312px] xl:min-w-[282px] 2xl:min-w-[325px]">
                <div className="mb-10 bg-white rounded-lg shadow-lg">
                  <div className="relative">
                    <img
                      src="https://www.ikea.com/th/en/images/products/markus-office-chair-vissle-dark-grey__0724714_pe734597_s5.jpg?f=xl"
                      className="w-80 h-80 object-cover"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center justify-center rounded bg-red-600 px-[10px] py-[4px] text-md font-medium text-white">
                      Top seller
                    </span>
                  </div>
                  <div className="px-6 pt-6 pb-8 text-start">
                    <h3 className="xs:text-xl text-lg font-semibold block mb-[5px]">
                      MARKUS
                    </h3>
                    <p className="text-lg">Office chair, Vissle dark grey</p>
                    <p className="text-xl font-bold py-3">4,990THB</p>
                    <div className="flex items-center justify-start text-xl">
                      <div className="text-amber-400 flex gap-1 items-baseline">
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                      </div>
                      <span className="pl-1">(10)</span>
                    </div>
                    <div className="flex gap-2 items-center justify-start pt-4">
                      <button className="rounded-3xl border-2 border-blue-600 hover:border-blue-800 bg-blue-600 text-white hover:bg-blue-800 p-2 text-xl transition duration-200">
                        <FaCartPlus />
                      </button>
                      <button className="rounded-3xl border-2 border-slate-400 text-slate-400 hover:border-rose-600 hover:bg-rose-600 p-2 hover:text-white text-xl transition duration-200">
                        <FaHeart />
                      </button>
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

export default SectionCarousal;
