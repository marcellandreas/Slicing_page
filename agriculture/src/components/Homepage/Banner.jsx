import "../../assets/styles/banner.css";
import Button from "../Elements/Button";
import Title from "../Elements/Title";

const Banner = () => {
  return (
    <section className="banner-homepage h-[90vh]">
      {/* Card */}
      <div className="flex flex-col justify-center h-screen  xl:pl-[180px] pl-[50px] ">
        {/* Text Banner */}
        <div className="w-[530px] mb-6">
          <Title
            subTitle="100% Natural Food"
            title={`Choose the best healthier ways  of life`}
            variant="text-left"
            sizeTitle="text-h1"
          />
        </div>
        {/* button banner */}
        <Button variant="button-default-2">Explore Now</Button>
      </div>
    </section>
  );
};

export default Banner;
