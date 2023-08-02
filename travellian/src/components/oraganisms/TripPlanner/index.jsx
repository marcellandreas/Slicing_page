import { Button } from "../../atoms";
import { CardTripPlanner, TitleBlock } from "../../molecules";

export const TripPlanner = () => {
  return (
    <section className=" px-4 py-20 2xl:py-[140px] 2xl:px-[182px]  h-auto  flex flex-col justify-center items-center gap-[80px]  ">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-20 ">
        <div className=" flex flex-col lg:flex-1   items-start gap-20 h-[334px] ">
          <TitleBlock
            title="Trip Planners"
            subTitle="20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines."
          />
          <div className="relative  bottom-5 left-5">
            <Button>View all trip plans</Button>
            <div className="h-[43px] w-[43px] bg-red-400 absolute -left-6 -top-6 -z-10"></div>
            <div className="h-[43px] w-[43px] bg-gray-400 absolute -right-6 -bottom-6 -z-10"></div>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 self-stretch lg:flex-1 ">
          {/* card */}
          <CardTripPlanner />
          <CardTripPlanner />
          <CardTripPlanner />
        </div>
      </div>
    </section>
  );
};
