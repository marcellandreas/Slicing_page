import { ButtonSub } from "../../Elements/ButtonSub";

const CardGallery = (props) => {
  const { img, text } = props;
  return (
    <div className="text-p col-span-12 md:col-span-6 lg:col-span-4 bg-primary-1 relative">
      <img src={img} alt={text} />
      <ButtonSub>{text}</ButtonSub>
    </div>
  );
};

export default CardGallery;
