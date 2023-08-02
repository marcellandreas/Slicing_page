import { CardPopuler, TitleBlock } from "../../molecules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// data

import { PopulerDestinationData } from "./data";

export const PopularDestination = () => {
  const hitung = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className=" px-4 py-20 2xl:pl-[140px] 2xl:pr-0 2xl:px-[182px] md:px-4  flex flex-col justify-center items-center gap-[100px]">
      {/* Top */}
      <div className="flex flex-col lg:flex-row gap-8 justify-end lg:justify-between items-end  self-stretch ">
        <TitleBlock
          title="Popular Destinations"
          subTitle="  Most popular destinations around the world, from historical places
            to natural wonders."
        />
        <div className="slider-controler hidden lg:flex gap-10 relative w-[120px] ">
          <button className="swiper-button-prev0 slider-arrow -left-10  absolute  prev-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="23"
              viewBox="0 0 12 23"
              fill="none"
            >
              <path
                d="M11 1.5L1 11.5L11 21.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="swiper-button-next0 slider-arrow left-10 absolute next-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="23"
              viewBox="0 0 12 23"
              fill="none"
            >
              <path
                d="M1 21.5L11 11.5L0.999999 1.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },

          1500: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next0",
          prevEl: ".swiper-button-prev0",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {PopulerDestinationData.map((data, i) => (
          <SwiperSlide key={i}>
            <CardPopuler data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* arrow */}
      <div className="slider-controler flex lg:hidden gap-10">
        <button className="swiper-button-prev0 slider-arrow  prev-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
          >
            <path
              d="M11 1.5L1 11.5L11 21.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="swiper-button-next0 slider-arrow  next-arrow ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
          >
            <path
              d="M1 21.5L11 11.5L0.999999 1.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
