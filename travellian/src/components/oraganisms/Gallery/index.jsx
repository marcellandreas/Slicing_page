import { TitleBlock } from "../../molecules";
import img from "../../../assets/images/lisbon.jpg";

export const Gallery = () => {
  return (
    <section className="px-4 py-20 w-full 2xl:py-[140px] 2xl:px-[182px] flex flex-col justify-center items-center gap-[100px] bg">
      <div className="flex flex-col lg:flex-row gap-8 justify-end lg:justify-between items-end  self-stretch ">
        <TitleBlock
          title="Destination Gallery"
          subTitle="Our photo gallery on trip"
        />
        {/* <div className="hidden lg:flex gap-10">
          <button className="py-7 px-5 rounded-xl bg-[#172432]">
            <div className="w-5 h-[10px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
              >
                <path
                  d="M11 1L1 11L11 21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
          <button className="py-7 px-5 rounded-xl bg-[#FF7757]">
            <div className="w-5 h-[10px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
              >
                <path
                  d="M1 21L11 11L0.999999 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </div> */}
      </div>
      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8  w-full ">
        <img
          className="h-80 md:h-[351px] xl:h-[469px] 2xl:h-[570px] 
          w-full lg:w-[248px] xl:w-[320px] 2xl:w-[365px] rounded-[26px]"
          src={img}
          alt=""
        />
        <img
          className="h-80 md:h-[351px] xl:h-[469px] 2xl:h-[570px] 
          w-full lg:w-[248px] xl:w-[320px] 2xl:w-[365px] rounded-[26px]"
          src={img}
          alt=""
        />
        <img
          className="h-80 md:h-[351px] xl:h-[469px] 2xl:h-[570px] 
          w-full lg:w-[248px] xl:w-[320px] 2xl:w-[365px] rounded-[26px]"
          src={img}
          alt=""
        />
      </div>
    </section>
  );
};
