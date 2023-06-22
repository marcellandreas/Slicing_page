import Gallery1 from "../../assets/gallery/1.png";
import Gallery2 from "../../assets/gallery/2.png";
import Gallery3 from "../../assets/gallery/3.png";
import { CardGallery } from "../Molecules";

const Gallery = () => {
  return (
    <section className="h-[957px] bg-[#F1F8F4]">
      <div className="grid grid-cols-12 gap-x-3 gap-y-3 h-full items-center justify-center px-3 md:px-0">
        <CardGallery text="Organic Juice" img={Gallery1} />
        <CardGallery text="Orginic Food" img={Gallery2} />
        <CardGallery text="Nuts Cookis" img={Gallery3} />
      </div>
    </section>
  );
};

export default Gallery;
