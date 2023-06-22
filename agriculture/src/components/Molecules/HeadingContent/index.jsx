import { Button, Title } from "../../Elements";

const HeadingContent = (props) => {
  const { title, subTitle, colorTitle, text, button, contentButton } = props;
  return (
    <div className="flex flex-wrap justify-between h-[116px] gap-8">
      <Title
        title={title}
        subTitle={subTitle}
        colorTitle={colorTitle}
        variant={text}
      />
      <div className="self-end">
        <Button variant={button}>{contentButton}</Button>
      </div>
    </div>
  );
};

export default HeadingContent;
