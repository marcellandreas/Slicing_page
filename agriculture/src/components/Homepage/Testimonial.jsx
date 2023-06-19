import "../../assets/styles/tesnimonial.css";
import Title from "../Elements/Title";

// img
import image from "../../assets/Banner.png";
import ratting from "../../assets/start.png";
import Paragraf from "../Elements/Paragraf";
import Counter from "../Molecules/Counter";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial-homepage h-screen ">
        <div className="flex gap-[60px] flex-col justify-center items-center h-full w-[80%] mx-auto ">
          <div>
            <aside className="mb-[60px]">
              <Title subTitle="Testimonial" title="What Our Customer Saying?" />
            </aside>
            <div className="flex flex-col items-center">
              {/* avatar */}
              <div className="w-[115px] h-[115px] mb-5">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col items-center text-center w-[780px] mb-[25px]">
                <img
                  src={ratting}
                  alt=""
                  className="w-[122.28px] h-[26.75px] mb-[25px]"
                />
                <Paragraf>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </Paragraf>
              </div>
              {/* name testimonial */}
              <div className="font-extrabold text-h6 flex flex-col items-center">
                <span>Sara Taylor</span>
                <p className="text-[15px] text-primary-4">Customer</p>
              </div>
            </div>
          </div>
          <hr className="w-full text-gray" />
          <div className="flex gap-[62px]">
            {/* 1 */}
            <Counter title={"100%"} paragraf="Organic" />
            <Counter title={"100%"} paragraf="Organic" />
            <Counter title={"100%"} paragraf="Organic" />
            <Counter title={"100%"} paragraf="Organic" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
