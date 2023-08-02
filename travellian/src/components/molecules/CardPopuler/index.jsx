import img from "../../../assets/images/berlin.png";
import icon from "../../../assets/icons/icon.svg";

export const CardPopuler = ({ data }) => {
  return (
    <div
      className={`lg:block w-full lg:w-[497px] h-[320px] md:h-[456px] lg:h-[561px]  rounded-[26px] relative  `}
    >
      <img
        className="w-full lg:w-[497px] h-[320px] md:h-[456px] lg:h-[561px] rounded-[26px] "
        src={img}
        alt="populer destination"
      />
      {/* text */}
      <div className=" text-white absolute  w-4/5 position-populer flex flex-col gap-[17px] items-start">
        <h3 className="text-2xl font-medium">Monument of Berlin</h3>
        <div className="flex gap-4 ">
          <div className="h-5 w-5">
            <img className="h-5 w-5" src={icon} alt="" />
          </div>
          <p className="text-lg">Berlin, Germany</p>
        </div>
      </div>
    </div>
  );
};
