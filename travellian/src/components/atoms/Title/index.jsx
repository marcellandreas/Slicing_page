export const Title = (props) => {
  const { children } = props;
  return (
    <h1
      className="text-[40px] md:text-[54px] lg:text-[64px] xl:text-[84px]  mb-4"
      style={{ lineHeight: 1, fontFamily: "Playfair Display" }}
    >
      {children}
    </h1>
  );
};
