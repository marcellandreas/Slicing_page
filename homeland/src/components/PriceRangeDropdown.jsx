import { useContext, useEffect, useState } from "react";

import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiWallet3Line,
} from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { Price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "100000 - 300000",
    },
    {
      value: "100000 - 400000",
    },
  ];
  return (
    <>
      <Menu as="div" className="dropdown relative ">
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-btn w-full text-left"
        >
          <RiWallet3Line className="dropdown-icon-primary" />
          <div>
            <div className="text-[15px] font-medium leading-tight ">
              {Price}
            </div>
            <div className="text-[13px]">Chose price range</div>
          </div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </Menu.Button>

        <Menu.Items className="dropdown-menu">
          {prices.map((prince, index) => {
            return (
              <Menu.Item
                onClick={() => setPrice(prince.value)}
                className="cursor-pointer hover:text-violet-700 transition"
                as="li"
                key={index}
              >
                {prince.value}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    </>
  );
};

export default PriceRangeDropdown;
