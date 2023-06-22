import AboutComp from "../components/Homepage/About";
import Banner from "../components/Homepage/Banner";
import Gallery from "../components/Homepage/Gallery";
import Header from "../components/Homepage/Header";
import Offer from "../components/Homepage/Offer";
import OfferBannerComp from "../components/Homepage/OfferBanner";
import ShopComp from "../components/Homepage/Shop";
import Testimonial from "../components/Homepage/Testimonial";
import WhoWeAre from "../components/Homepage/WhoWeAre";

const Home = () => {
  return (
    <section className="w-full bg-white">
      <Header />
      <Banner />
      <OfferBannerComp />
      <AboutComp />
      <ShopComp />
      <Testimonial />
      <Offer />
      <WhoWeAre />
      <Gallery />
      <h1>Home</h1>
    </section>
  );
};

export default Home;
