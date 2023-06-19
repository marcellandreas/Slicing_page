import Button from "../Elements/Button";
import productImage from "../../assets/products/product-1.png";
import productImage2 from "../../assets/products/product-2.png";
import CardProduct from "../Molecules/CardProduct";
import Title from "../Elements/Title";

const ShopComp = () => {
  return (
    <>
      <section className="text-primary-1 flex gap-10 flex-col items-center justify-center my-[180px]">
        {/* top */}
        <Title subTitle="Categories" title="Our Products" />
        {/* mid === card */}
        <div className="w-full flex justify-center items-center mb-[120px] gap-5">
          {/* card */}
          <CardProduct
            title="Calabrese Broccoli"
            price="$13.00"
            tag="Vegetable"
            imgProduct={productImage}
          />
          <CardProduct
            title="pisang"
            price="$67.00"
            tag="Buah"
            imgProduct={productImage2}
          />
        </div>
        {/* bottom */}
        <Button>Load More</Button>
      </section>
    </>
  );
};

export default ShopComp;
