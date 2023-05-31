import "./style.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="w-full  h-[500px]">
      <section
        id="banner"
        className="h-[500px]
    "
      >
        <div className="flex flex-col justify-center h-[500px] ml-[200px] gap-y-5">
          <div className="flex flex-col items-start justify-center p-0 gap-[9px] ">
            <h1 className="font-normal text-[45px] text-primary2">
              Let Your Home <br /> Be Unique
            </h1>
            <div className="font-normal text-base text-secondary">
              There are many variations of the passages of lorem Ipsum <br />
              fromavailable,variations of the passages.
            </div>
          </div>
          <div>
            <button className="bg-primary2 text-white py-[13px] px-[24px] rounded-2xl gap-4 flex items-center justify-center">
              <p className="text-primary3">Get Started</p>
              <AiOutlineArrowRight className="text-primary" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
