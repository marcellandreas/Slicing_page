import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import { dataBanner } from "./data";
import arrow from "../../../assets/icons/arrow.png";
import { useState } from "react";
import { Title, SubTitle } from "../../atoms";
import { FormSearch } from "../../molecules";
import Navbar from "../../molecules/Navbar";
import NavbarComponent from "../../molecules/Navbar";

export const Banner = () => {
  const initialState = {
    name: "",
    destination: "",
    email: "",
  };

  const [data, setData] = useState(initialState);

  const dataValue = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <section id="banner-section relative  ">
        <section className="w-full h-[1200px] md:h-screen relative">
          <NavbarComponent />
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {dataBanner.map((data) => (
              <SwiperSlide key={data.Id}>
                <div
                  style={{
                    backgroundImage: `url(${data.image})`,
                  }}
                  className="w-full h-[1200px] md:h-screen relative bg-cover"
                >
                  {data.content}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <section className="absolute text-white w-1/2 top-40 md:top-80 2xl:top-32 left-8 text-3xl z-10">
            <Title>Start your unforgettable journey with us.</Title>
            <SubTitle> The best travel for your jouney begins now</SubTitle>
          </section>
          <section className="absolute m-4 md:m-0 md:w-3/4 bg-white bottom-20 md:bottom-40 left-0 flex flex-wrap md:flex-nowrap justify-end items-center z-10 md:pl-8 gap-[60px] md:gap-[100px] md:rounded-tr-[20px] md:rounded-br-[20px] rounded-xl ">
            <FormSearch data={data} dataValue={dataValue} />
            <button className="bg-[#FF7757]   text-white h-full w-full md:w-[170px]  flex  items-center px-5 py-10 md:py-[60px] md:rounded-tr-[20px] md:rounded-br-[20px]  rounded-xl ">
              <div className="flex flex-col md:flex-row w-full gap-3 text-4xl justify-between md:justify-center items-center">
                <p>Book Now</p>
                <img src={arrow} alt="" className="w-5 h-5" />
              </div>
            </button>
          </section>
        </section>
      </section>
    </>
  );
};
