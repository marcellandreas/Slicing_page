import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="container flex flex-1 justify-around items-center h-[100px] px-5">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex gap-4 items-center justify-start">
          <a className="text-xl" href="#">
            Home
          </a>
          <a className="text-xl" href="#">
            Page
          </a>
          <a className="text-xl" href="#">
            Services
          </a>
          <a className="text-xl" href="#">
            Project
          </a>
          <a className="text-xl" href="#">
            Blog
          </a>
          <a className="text-xl" href="#">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
