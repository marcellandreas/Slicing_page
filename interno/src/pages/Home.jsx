import Banner from "../components/Banner";
import Blog from "../components/Blog";
import ClientLogo from "../components/ClientLogo";
import Contact from "../components/Contact";
import Counter from "../components/Counter";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Styling from "../components/Styling";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <section className="text-primary2">
      <Navbar />
      <Banner />
      <div className="w-[1000px] mx-auto ">
        <Feature />
        <Styling />
        <Testimonial />
        <ClientLogo />
        <Project />
      </div>
      <Counter />
      <div className="w-[1000px] mx-auto">
        <Blog />
        <Contact />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
