import { SubTitle, Title } from "../../atoms";

export const TitleBlock = (props) => {
  const { title, subTitle, line = true } = props;
  return (
    <div className="flex flex-col items-start gap-8 self-stretch">
      {/* Heading */}
      <div className="flex flex-col gap-5 self-stretch ">
        <Title>{title}</Title>
        {line ? (
          <div className="w-3/5 md:w-full border border-b-[100%] border-[#ff7757] " />
        ) : (
          <p className="hidden">a</p>
        )}
      </div>
      {/* text */}
      <SubTitle color="text-[#767E86]">{subTitle}</SubTitle>
    </div>
  );
};
