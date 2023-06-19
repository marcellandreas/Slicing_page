import "../../assets/styles/offerBanner.css";
import OfferBanner from "../Molecules/OfferBanner";

const OfferBannerComp = () => {
  return (
    <section className="flex flex-wrap gap-7 justify-center items-center my-20 text-white">
      {/* Banner  1*/}
      <OfferBanner variant="offer-banner-1 " promo={"Narutal!!"}>
        Get Garden <br />
        Fresh Fruits
      </OfferBanner>
      {/* Banner 2 */}
      <OfferBanner variant="offer-banner-2 text-primary-1" promo={"Offer!!"}>
        Get Garden <br />
        Fresh Fruits
      </OfferBanner>
    </section>
  );
};

export default OfferBannerComp;
