// Image
import ratting from "../../../assets/start.png";

// elments
import Tag from "../../Elements/Tag";

const CardProduct = (props) => {
  const { title, price, tag, imgProduct } = props;
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[335px] h-[480px] bg-white rounded-[30px] border border-primary-1">
        {/* Top*/}
        <Tag>{tag}</Tag>
        {/* mid */}
        <div className="h-[324px]">
          <img src={imgProduct} alt="" />
        </div>
        {/* bottom */}
        <div className="w-[279px] grid gap-[13px]">
          <h4 className="font-semibold text-button">{title}</h4>
          <hr className="text-primary-5 font-semibold" />
          {/* ratting */}
          <div className="flex justify-between">
            <p className="font-bold">
              <s className="font-normal">$20.00</s> {price}
            </p>
            <div className="w-[84px] h-[18px]">
              <img src={ratting} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
