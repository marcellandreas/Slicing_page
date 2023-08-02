import rating from "../../../assets/icons/Rating.png";
// import avatar from "../../../assets/images/avatar.png";
export const CardTestimonial = ({ data }) => {
  const { name, job, avatar, comment } = data;
  return (
    <div className="flex w-full md:min-w-[500px] xl:min-w-[562px] 2xl:min-w-[663px] pt-[60px] px-5 md:px-10 pb-8 mb:pb-10 flex-col items-start gap-5 rounded-xl bg-[#F5F6F7] mt-20 relative">
      <img
        className="testimonial-profile absolute rounded-full -top-16"
        src={avatar}
        alt=""
      />
      <p className="text-lg text-[#172432] text-left">{comment}</p>
      <div className="w-[160px]">
        <img className="" src={rating} alt="" />
      </div>
      <div className="flex gap-1 flex-col items-start text-[#767E86]">
        <h4 className="text-2xl">{name}</h4>
        <h4 className="text-lg">{job}</h4>
      </div>
    </div>
  );
};
