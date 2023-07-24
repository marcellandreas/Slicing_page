import { useContext, useEffect, useState } from "react";

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { Country, setCountry, Countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Menu as="div" className="dropdown relative ">
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-btn w-full text-left"
        >
          <RiMapPinLine className="dropdown-icon-primary" />
          <div>
            <div className="text-[15px] font-medium leading-tight ">
              {Country}
            </div>
            <div className="text-[13px]">Select Your Place</div>
          </div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </Menu.Button>

        <Menu.Items className="dropdown-menu">
          {Countries.map((Country, index) => {
            return (
              <Menu.Item
                onClick={() => setCountry(Country)}
                className="cursor-pointer hover:text-violet-700 transition"
                as="li"
                key={index}
              >
                {Country}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    </>
  );
};

export default CountryDropdown;
