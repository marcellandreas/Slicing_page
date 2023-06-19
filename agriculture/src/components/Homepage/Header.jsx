import { useState } from "react";
import image from "../../assets/Logo.svg";

// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <nav className="flex h-20 w-full justify-start pl-5 md:pl-0 md:justify-around items-center">
      <div className="absolute right-6 md:hidden top-8 scale-150">
        <GiHamburgerMenu
          onClick={showMenu}
          className="scale-150 cursor-pointer"
        />
      </div>
      {/* Logo Company */}
      <div>
        <img src={image} alt="" />
      </div>
      {/* Menu Headers  */}
      <div className=" ">
        <ul className="hidden md:flex gap-3 text-xl font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Pages</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">News</Link>
          </li>
        </ul>

        <ul
          className={
            active
              ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
              : "hidden"
          }
        >
          <GrClose onClick={showMenu} className="cursor-pointer" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Pages</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">News</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
