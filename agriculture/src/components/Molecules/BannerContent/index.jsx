import { Button, Title } from "../../Elements";

const BannerContent = (props) => {
  const { title, subTitle, textAlign, sizeTitle, button, contentButton } =
    props;
  return (
    <div className="flex flex-col justify-center h-screen  xl:pl-[180px] pl-[50px] ">
      <div className="w-[530px] mb-6">
        <Title
          subTitle={subTitle}
          title={title}
          variant={textAlign}
          sizeTitle={sizeTitle}
        />
      </div>
      <Button variant={button}>{contentButton}</Button>
    </div>
  );
};

export default BannerContent;
