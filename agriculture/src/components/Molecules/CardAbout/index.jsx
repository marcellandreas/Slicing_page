// Elements
import Paragraf from "../../Elements/Paragraf";
import Title from "../../Elements/Title";

const CardAbout = (props) => {
  const { title, subTitle, icon } = props;
  return (
    <div className="flex gap-[19px] ">
      <div className="h-[101px] w-[101px]">
        <img src={icon} alt="" />
      </div>
      <div className="w-[440px]">
        <Title
          title={title}
          sizeTitle={`text-h6`}
          variant="text-left"
          mdSizeTitle="max-md:text-5"
        />
        <Paragraf>{subTitle}</Paragraf>
      </div>
    </div>
  );
};

export default CardAbout;
