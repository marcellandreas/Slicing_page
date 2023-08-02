import { CardOffer, TitleBlock } from "../../molecules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { CardTestimonial } from "../../molecules/CardTestimonial";
import { TestimonialData } from "./data";

export const Testimonial = () => {
  return (
    <section className="px-4 py-20 xl:pt-[140px] xl:pb-[180px] 2xl:px-[182px] flex flex-col justify-center items-center gap-[160px] w-full">
      <div className="flex flex-col  lg:flex-row gap-8 justify-end lg:justify-between items-end  self-stretch ">
        <TitleBlock
          title="Traveler’s Experiences"
          subTitle="Here some awesome feedback from our travelers"
        />
      </div>
      {/* Content */}
      {/* card */}
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {TestimonialData.map((data, i) => {
          return (
            <SwiperSlide key={i}>
              <CardTestimonial data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* BUtton */}
      <div className="slider-controler flex  justify-center lg:justify-end items-center gap-10 w-full">
        <button className="swiper-button-prev2 slider-arrow  prev-arrow">
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
        <button className="swiper-button-next2 slider-arrow  next-arrow">
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
