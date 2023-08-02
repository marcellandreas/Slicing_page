import { useState } from "react";
import logo from "../../../assets/images/Logo.png";
import { Button } from "../../atoms";

const NavbarComponent = () => {
  const [toggle, setToggle] = useState(false);
  const toggleClick = () => {
    setToggle(!toggle);
  };
  return (
    <nav className=" bg-transparent z-30 top-0 absolute flex w-full p-8 justify-between lg:justify-around  items-center">
      <div>
        <img className="w-[234px]" src={logo} alt="" />
      </div>
      <ul className="hidden lg:flex  justify-center items-center gap-8 text-white">
        <li className="text-2xl ">Home</li>
        <li className="text-2xl ">Explore</li>
        <li className="text-2xl ">Travel</li>
        <li className="text-2xl ">Blog</li>
        <li className="text-2xl ">Pricing</li>
      </ul>
      <div className="hidden lg:flex">
        <Button>Login</Button>
        <Button>signup</Button>
      </div>
      <button
        onClick={toggleClick}
        className="bg-yellow-100 w-5 h-5 blog lg:hidden"
      >
        m
      </button>
      {toggle ? (
        <div className="bg-white absolute top-24 w-[90%] h-auto p-5 rounded-2xl scroll-smooth">
          <ul className="flex flex-col justify-center items-center gap-8 text-black">
            <li className="text-2xl border w-full border-b-4">Home</li>
            <li className="text-2xl border w-full border-b-4">Explore</li>
            <li className="text-2xl border w-full border-b-4">Travel</li>
            <li className="text-2xl border w-full border-b-4">Blog</li>
            <li className="text-2xl border w-full border-b-4">Pricing</li>
          </ul>
        </div>
      ) : (
        <div className="hidden">tidak</div>
      )}
    </nav>
  );
};

export default NavbarComponent;
