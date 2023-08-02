import { CardOffer, TitleBlock } from "../../molecules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { SpesialOfferData } from "./data";

const SpeasialOffer = () => {
  return (
    <section className=" px-4 py-20 2xl:px-[140px] 2xl:py-[182px] flex flex-col justify-center items-center gap-[60px]">
      <div className="flex w-full lg:justify-between md:justify-end">
        <div className="lg:order-2 self-end  md:text-right">
          <TitleBlock
            title="Special Offer"
            subTitle="Check out our special offer and discounts"
          />
        </div>

        <div className="hidden lg:block self-end">
          <div className="slider-controler hidden lg:flex gap-10  ">
            <button className="swiper-button-prev1 slider-arrow prev-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
              >
                <path
                  d="M11 1L1 11L11 21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="swiper-button-next1 slider-arrow next-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
              >
                <path
                  d="M1 21L11 11L0.999999 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* content */}
      {/* card */}

      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1",
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {SpesialOfferData.map((data, i) => {
          return (
            <SwiperSlide key={i}>
              <CardOffer data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* arrow */}
      <div className="slider-controler flex lg:hidden justify-center items-center gap-10 w-[250px]">
        <button className="swiper-button-prev1 slider-arrow  prev-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="22"
            viewBox="0 0 12 22"
            fill="none"
          >
            <path
              d="M11 1.00012L1 11.0001L11 21.0001"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="swiper-button-next1 slider-arrow  next-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="22"
            viewBox="0 0 12 22"
            fill="none"
          >
            <path
              d="M1 21.0001L11 11.0001L0.999999 1.00012"
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

export default SpeasialOffer;
