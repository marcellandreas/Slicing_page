import AboutComp from "../components/Homepage/About";
import Banner from "../components/Homepage/Banner";
import Header from "../components/Homepage/Header";
import OfferBannerComp from "../components/Homepage/OfferBanner";
import ShopComp from "../components/Homepage/Shop";
import Testimonial from "../components/Homepage/Testimonial";

const Home = () => {
  return (
    <section className="w-full bg-white">
      <Header />
      <Banner />
      <OfferBannerComp />
      <AboutComp />
      <ShopComp />
      <Testimonial />
      <h1>Home</h1>
    </section>
  );
};

export default Home;
