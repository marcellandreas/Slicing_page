import rating from "../../../assets/icons/Rating.png";
import { Button } from "../../atoms";

export const CardOffer = ({ data }) => {
  const { city, counrty, image, price } = data;
  return (
    <div
      className={`lg:flex flex-col w-full lg:w-[341px] xl:w-[438px] 2xl:w-[497px] justify-start items-start  rounded-t-[26px] bg-[#FFF8F1]`}
    >
      <div className="w-full h-[286px] ">
        <img
          className="w-full h-[286px] rounded-t-[26px] bg-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="p-5 flex flex-col w-full gap-6 ">
        {/* Title/Rating */}
        <div className="w-full flex flex-col  items-start">
          <h1 className="text-3xl text-[#767E86]">{`${city}, ${counrty}`}</h1>
          <div className="w-[160px]">
            <img src={rating} alt="" />
          </div>
        </div>

        <p className="text-base md:text-lg text-[#172432] text-left">
          5 nights and 4 days in 5 star hotel, breakfast and lunch included.
          Very popular during the renaissance. Passage and going through the
          cites of the world in classical literature.
        </p>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-5 items-start">
          <div className="flex gap-8 items-center">
            <h3 className="text-lg text-[#767E86]">From</h3>
            <h3 className="text-3xl text-[#FF7757]">${price}</h3>
          </div>
          <Button>Details</Button>
        </div>
      </div>
    </div>
  );
};
