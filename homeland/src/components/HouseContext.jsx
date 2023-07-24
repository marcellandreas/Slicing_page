import { createContext, useEffect, useState } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [Houses, setHouses] = useState(housesData);
  const [Country, setCountry] = useState("Location (any)");
  const [Countries, setCountries] = useState([]);
  const [Property, setProperty] = useState("Property type (any)");
  const [Properties, setProperties] = useState([]);
  const [Price, setPrice] = useState("Proce range (any)");
  const [Loading, setLoading] = useState(false);

  // return all countries

  useEffect(() => {
    const allCountries = Houses.map((house) => {
      return house.country;
    });
    // remove dulicates

    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  // return all Properties
  useEffect(() => {
    const allProperties = Houses.map((house) => {
      return house.type;
    });
    // remove dulicates

    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];

    // set Properties state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // set Loading
    setLoading(true);
    // Create function that checks if the string includes
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // get first value of price and porse it to number
    const minPrice = parseInt(Price.split(" ")[0]);
    // get second value of price which is the maximum

    const maxPrice = parseInt(Price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //  if all values are selected
      if (
        house.country === Country &&
        house.type === Property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      // if all values are default
      if (isDefault(Country) && isDefault(Property) && isDefault(Price)) {
        return house;
      }

      // if country is not default
      if (!isDefault(Country) && isDefault(Property) && isDefault(Price)) {
        return house.country === Country;
      }

      // if Property is not default
      if (!isDefault(Property) && isDefault(Country) && isDefault(Price)) {
        return (house.type = Property);
      }

      // if Price is not default
      if (!isDefault(Price) && isDefault(Country) && isDefault(Property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if country & property is not default
      if (!isDefault(Country) && !isDefault(Property) && isDefault(Price)) {
        return house.country === Country && house.type === Property;
      }

      // if country and price is not default
      if (!isDefault(Country) && !isDefault(Price) && isDefault(Property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === Country;
        }
      }

      // property and price  is not default
      if (!isDefault(Property) && !isDefault(Price) && isDefault(Country)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === Property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        Country,
        setCountry,
        Countries,
        Property,
        setProperty,
        Properties,
        Price,
        setPrice,
        Houses,
        Loading,
        handleClick,
        Loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
