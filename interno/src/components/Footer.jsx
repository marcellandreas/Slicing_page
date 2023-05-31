import Logo from "../assets/Logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-[1000px] mx-auto my-[120px] flex justify-between flex-wrap ">
      {/* Logo */}
      <div className="flex flex-col gap-4">
        <img src={Logo} alt="" />
        <p>
          It is a long established fact that a reader <br />
          will be distracted lookings.
        </p>
        {/* Sosial */}
        <div className="flex justify-between w-[60%]">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
      {/* Pages */}
      <div>
        <h2 className="font-bold text-[25px]">Pages</h2>
        <div className="list-none text-[22px]">
          <li>About Us </li>
          <li>Our Projects</li>
          <li>Our Team</li>
          <li>Contact Us</li>
          <li>Services</li>
        </div>
      </div>
      {/* Services */}
      <div>
        <h2 className="font-bold text-[25px]"> Services</h2>
        <div className="list-none text-[22px]">
          <li>Kitchan</li>
          <li>Living Area</li>
          <li>Bathroom</li>
          <li>Dinning Hall</li>
          <li>Bedroom</li>
        </div>
      </div>
      {/* Contact */}
      <div>
        <h2 className="font-bold text-[25px]">Contact</h2>
        <div className="list-none text-[22px]">
          <li>
            {" "}
            55 East Birchwood Ave. <br /> Brooklyn, New York 11201{" "}
          </li>
          <li> contact@interno.com</li>
          <li>(123) 456 - 7890</li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
