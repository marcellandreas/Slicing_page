import Paragraf from "../../Elements/Paragraf";
import Title from "../../Elements/Title";

const Counter = (props) => {
  const { title, paragraf } = props;
  return (
    <>
      <div className="w-[211px] h-[211px] rounded-full border border-primary-2 flex justify-center items-center flex-col text-primary-1">
        <Title title={title} />
        <Paragraf>{paragraf}</Paragraf>
      </div>
    </>
  );
};

export default Counter;
