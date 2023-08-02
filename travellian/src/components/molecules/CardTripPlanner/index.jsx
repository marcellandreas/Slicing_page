import rating from "../../../assets/icons/Rating.png";
import img from "../../../assets/images/lisbon.jpg";

export const CardTripPlanner = () => {
  return (
    <div className="lg:w-[250px] h-[466px] lg:h-[496px] flex flex-col">
      <img className="h-[320px] lg:h-[350px] rounded-[26px]" src={img} alt="" />
      <div className="flex py-5 flex-col gap-3">
        <div className="flex justify-between text-lg">
          <h5 className="uppercase">Guided Tour</h5>
          <h5>€99/Day</h5>
        </div>
        <h2 className="text-3xl font-semibold">Rome City Tour</h2>
        <div className="flex justify-between text-lg">
          <img src={rating} alt="" />
          <h5>7 Days tour</h5>
        </div>
      </div>
    </div>
  );
};
