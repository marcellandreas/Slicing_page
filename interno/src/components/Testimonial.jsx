import testi1 from "../assets/testi1.png";

const Testimonial = () => {
  return (
    <section className="w-full my-[120px]">
      <div className="bg-primary3 rounded-xl px-4 py-16 text-primary2 ">
        <section>
          <h2 className="text-5xl text-center mb-8 font-semibold">
            What the People Thinks <br /> About Us
          </h2>
          <div className="flex gap-4">
            {/* Card Testimonial */}
            <div className="bg-white w-[370px] h-[339px] p-8 flex flex-col gap-[25px] rounded-xl">
              {/* Header Card Testimonial  */}
              <div className="flex items-center justify-center gap-x-6">
                <div className="w-[77px] h-[77px]">
                  <img src={testi1} alt="" />
                </div>
                <div className="text-[18px]">
                  <p className="font-bold">Nattasha Mith</p>
                  <p>Sydney, USA</p>
                </div>
              </div>
              {/* Content Card Testimonial  */}
              <div className="text-[22px]">
                <div>
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </div>
              </div>
            </div>
            {/* Card Testimonial */}
            <div className="bg-white w-[370px] h-[339px] p-8 flex flex-col gap-[25px] rounded-xl">
              {/* Header Card Testimonial  */}
              <div className="flex items-center justify-center gap-x-6">
                <div className="w-[77px] h-[77px]">
                  <img src={testi1} alt="" />
                </div>
                <div className="text-[18px]">
                  <p className="font-bold">Nattasha Mith</p>
                  <p>Sydney, USA</p>
                </div>
              </div>
              {/* Content Card Testimonial  */}
              <div className="text-[22px]">
                <div>
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </div>
              </div>
            </div>
            {/* Card Testimonial */}
            <div className="bg-white w-[370px] h-[339px] p-8 flex flex-col gap-[25px] rounded-xl">
              {/* Header Card Testimonial  */}
              <div className="flex items-center justify-center gap-x-6">
                <div className="w-[77px] h-[77px]">
                  <img src={testi1} alt="" />
                </div>
                <div className="text-[18px]">
                  <p className="font-bold">Nattasha Mith</p>
                  <p>Sydney, USA</p>
                </div>
              </div>
              {/* Content Card Testimonial  */}
              <div className="text-[22px]">
                <div>
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
