import logo from "../../../assets/images/Logo.png";
import {
  BsFacebook,
  BsPinterest,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="flex py-20 px-4 xl:pb-[140px] xl:py-[180px] items-center  bg-[#172432] text-white">
      <section className="flex flex-col lg:flex-row lg:gap-0 lg:justify-around items-start gap-[60px] flex-1">
        {/* menu logo */}

        <div className="flex flex-col items-start gap-4 self-stretch ">
          <img src={logo} alt="logo Footer" />
          <p className="text-sm ">
            Copyright © Travellian 2020 All rights reserved
          </p>
        </div>
        {/* Menu Footer 1 */}
        {/* Info*/}

        <div className="flex gap-4 flex-col items-start">
          <h3 className="text-2xl font-medium">Menu</h3>
          <div className="flex flex-col items-start gap-3 text-lg">
            <p>Home</p>
            <p>Explore</p>
            <p>Travel</p>
            <p>Blog</p>
            <p>Pricing</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col items-start">
          <h3 className="text-2xl font-medium">Information</h3>
          <div className="flex flex-col items-start gap-3 text-lg">
            <p>Destinations</p>
            <p>Supports</p>
            <p>Term & Conditions</p>
            <p>Privacy</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col items-start">
          <h3 className="text-2xl font-medium">Contact Info</h3>
          <div className="flex flex-col items-start gap-3 text-lg">
            <p>+123 456 789</p>
            <p>info@travellian.com</p>
            <p>1245, New Yourk, USA</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col items-start">
          <h3 className="text-2xl font-medium">Follow us on</h3>
          <div className="flex  items-start gap-6 text-lg">
            <BsFacebook className="h-8 w-8" />
            <BsPinterest className="h-8 w-8" />
            <BsInstagram className="h-8 w-8" />
            <BsTwitter className="h-8 w-8" />
          </div>
        </div>
      </section>
    </footer>
  );
};
