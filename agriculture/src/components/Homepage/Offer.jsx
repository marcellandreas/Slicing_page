// image
import productImage from "../../assets/products/product-1.png";
import { CardProduct, HeadingContent } from "../Molecules";

const Offer = () => {
  return (
    <div className="bg-primary-1">
      <section className="h-[1050px] w-[85%] mx-auto bg-primary-1 flex flex-col justify-center gap-5">
        {/* Top */}
        <HeadingContent
          title="We Offer Organic For You"
          subTitle="Offer"
          colorTitle="text-white"
          text="text-left"
          button="button-default-2"
          contentButton="View All Product"
        />
        {/* Bottom */}
        <div className="flex justify-between gap-5 max-md:hidden">
          <CardProduct
            title="Calabrese Broccoli"
            price="$13.00"
            tag="Vegetable"
            imgProduct={productImage}
          />
          {/* <CardProduct
            title="Calabrese Broccoli"
            price="$13.00"
            tag="Vegetable"
            imgProduct={productImage}
          />
          <CardProduct
            title="Calabrese Broccoli"
            price="$13.00"
            tag="Vegetable"
            imgProduct={productImage}
          />
          <CardProduct
            title="Calabrese Broccoli"
            price="$13.00"
            tag="Vegetable"
            imgProduct={productImage}
          /> */}
        </div>
      </section>
    </div>
  );
};

export default Offer;
