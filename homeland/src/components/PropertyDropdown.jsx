import { useContext, useEffect, useState } from "react";

import {
  RiMapPinLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiHome5Line,
} from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { Property, setProperty, Properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Menu as="div" className="dropdown relative ">
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-btn w-full text-left"
        >
          <RiHome5Line className="dropdown-icon-primary" />
          <div>
            <div className="text-[15px] font-medium leading-tight ">
              {Property}
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
          {Properties.map((property, index) => {
            return (
              <Menu.Item
                onClick={() => setProperty(property)}
                className="cursor-pointer hover:text-violet-700 transition"
                as="li"
                key={index}
              >
                {property}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    </>
  );
};

export default PropertyDropdown;
