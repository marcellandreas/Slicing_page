import image from "../../assets/image/about-img.png";
import icon from "../../assets/image/about-icon.png";
import icon2 from "../../assets/image/about-icon-2.png";
import CardAbout from "../Molecules/CardAbout";
import Button from "../Elements/Button";
import Title from "../Elements/Title";
import Paragraf from "../Elements/Paragraf";

const AboutComp = () => {
  return (
    <section className="bg-primary-7 flex flex-1 justify-center gap-12  items-center text-primary-1 py-20">
      {/* left */}
      <div className="w-[600px]">
        <img src={image} alt="" />
      </div>
      {/* right Card */}
      <div className="flex flex-col w-[700px] gap-[46px]">
        {/* Top */}
        <div className="flex flex-col gap-3">
          <Title
            subTitle="About Us"
            title="We Believe in Working Accredited Farmers"
            variant="text-left"
          />
          <Paragraf>
            {" "}
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Paragraf>
        </div>
        {/* mid */}
        <div className="flex flex-col gap-y-5">
          {/* 1 */}
          <CardAbout
            title="Organic Foods Only"
            subTitle="  Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum"
            icon={icon}
          />
          {/* 2 */}
          <CardAbout
            title="Quality Standards"
            subTitle="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            icon={icon2}
          />
        </div>
        {/* Bottom */}
        <Button>Shop Now</Button>
      </div>
    </section>
  );
};

export default AboutComp;
