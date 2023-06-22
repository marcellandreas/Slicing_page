import "../../assets/styles/banner.css";
import { BannerContent } from "../Molecules";

const Banner = () => {
  return (
    <section className="banner-homepage h-[90vh] grid grid-cols-12">
      <BannerContent
        title="Choose the best healthier ways of life"
        subTitle="100% Natural Food"
        textAlign="text-left"
        sizeTitle="text-h1"
        button="button-default-2"
        contentButton="Explore Now"
      />
    </section>
  );
};

export default Banner;
