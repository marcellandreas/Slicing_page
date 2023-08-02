import { Footer, NewsLatter } from "../components/molecules";
import { Banner } from "../components/oraganisms/Banner";
import { Gallery } from "../components/oraganisms/Gallery";
import { OurBlog } from "../components/oraganisms/OurBlog";
import { PopularDestination } from "../components/oraganisms/PopularDestination";
import SpeasialOffer from "../components/oraganisms/SpesialOffer";
import { Testimonial } from "../components/oraganisms/Testimonial";
import { TripPlanner } from "../components/oraganisms/TripPlanner";
import { Layout } from "../components/templates";

const LandingPage = () => {
  return (
    <main className="min-w-full">
      <Banner />
      <PopularDestination />
      <SpeasialOffer />
      <OurBlog />
      <TripPlanner />
      <Gallery />
      <Testimonial />
      <NewsLatter />
      <Footer />
    </main>
  );
};

export default LandingPage;
