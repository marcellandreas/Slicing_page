import { TitleBlock } from "../../molecules";
import img from "../../../assets/images/banner.png";
import { BsArrowRight } from "react-icons/bs";

export const OurBlog = () => {
  return (
    <section className="px-4 py-20 2xl:py-[140px] 2xl:px-[182px] flex flex-col justify-center items-center bg-blue-200 gap-[100px]">
      <div className="flex flex-col lg:flex-row gap-8 justify-end lg:justify-between items-end  self-stretch ">
        <TitleBlock
          title="Our Blog"
          subTitle="An insight the incredible experience in the world"
        />
      </div>
      {/* content */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center lg:justify-between items-start  self-stretch w-full ">
        <div className="lg:flex-1 lg:h-[686px]">
          <img
            className="w-full lg:w-full h-[314px] md:h-[456px] lg:h-[686px] rounded-[26px]"
            src={img}
            alt=""
          />
        </div>
        <div className="lg:flex-1 flex flex-col gap-6">
          <TitleBlock
            line={false}
            title={`Beautiful Italy  Let’s travel`}
            subTitle="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues."
          />
          <div className="flex items-center gap-5 self-stretch cursor-pointer text-[#ff7757]">
            <div className="text-2xl ">Read More</div>
            <BsArrowRight className="w-[27px] font-bold h-[27px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
