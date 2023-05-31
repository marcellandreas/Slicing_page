import { MdOutlineFileOpen } from "react-icons/md";
import Image from "../assets/Style.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Styling = () => {
  return (
    <section className="w-full my-[120px]">
      <div className="flex justify-between gap-7">
        <div className="flex flex-col items-start justify-center gap-11 w-[472px]">
          <div className="flex flex-col gap-[33px]">
            <h3
              className="font-normal text-5xl
            "
            >
              We Create The Art Of Stylish Living Stylishly
            </h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
          </div>
          <div className="flex flex-col justify-between h-[215px]">
            <div className="flex items-center justify-start gap-x-4">
              <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center">
                <MdOutlineFileOpen className="text-2xl" />
              </div>
              <div>
                <h5 className="font-bold text-[24px]">12345678</h5>
                <h5 className="text-[22px]">Call Us Anytime</h5>
              </div>
            </div>
            <button className="flex items-center justify-start gap-x-4 px-[31px] py-[26px] bg-primary2 text-white rounded-2xl text-[18px]">
              <p>Get Free Estimate</p>
              <AiOutlineArrowRight className="text-primary" />
            </button>
          </div>
        </div>
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Styling;
