import Title from "../../Elements/Title";
import "./style.css";

const OfferBanner = (props) => {
  const { children, variant = "bg-primary-1", promo } = props;
  return (
    <div className={`w-[520px] h-[285px] rounded-xl ${variant}`}>
      <div className="flex justify-center flex-col h-full pl-12">
        <Title subTitle={promo} title={children} variant={"text-left"} />
      </div>
    </div>
  );
};

export default OfferBanner;
