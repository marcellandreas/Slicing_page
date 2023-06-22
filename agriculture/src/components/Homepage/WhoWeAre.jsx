import image from "../../assets/whoweare.png";
import Paragraf from "../Elements/Paragraf";
import Title from "../Elements/Title";

const WhoWeAre = () => {
  return (
    <section className="h-[931px] relative flex">
      <div className="h-[931px] w-50% max-lg:w-full ">
        <img src={image} alt="" className="bg-cover" />
      </div>
      <article className="absolute border border-primary-3 h-[723px] max-md:h-auto w-[789px] max-lg:w-[80%] top-[60px] max-md:top-[-80px] bg-white right-[130px]  max-lg:right-0  max-lg:left-5 rounded-[30px] py-[78px] px-[89px] max-lg:px-[40px] max-lg:py-[30px]">
        <aside className="mb-[35px]">
          <Title
            title="Econis is a Friendly Organic Store"
            subTitle="Eco Friendly"
            variant="text-left"
            sizeTitle="text-h2"
          />
        </aside>
        <aside className="grid gap-9 max-md:gap-2">
          <div>
            <Title
              title="Start with Our Company First"
              sizeTitle="text-h4"
              variant="text-left"
              mdSizeTitle="max-md:text-h5"
            />
            <Paragraf>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </Paragraf>
          </div>
          <div>
            <Title
              title="Learn How to Grow Yourself"
              sizeTitle="text-h4"
              mdSizeTitle="max-md:text-h5"
              variant="text-left"
            />
            <Paragraf>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </Paragraf>
          </div>
          <div>
            <Title
              title="Farming Strategies of Today"
              sizeTitle="text-h4"
              mdSizeTitle="max-md:text-h5"
              variant="text-left"
            />
            <Paragraf>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </Paragraf>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default WhoWeAre;
