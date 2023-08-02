export const SubTitle = (props) => {
  const { color = "text-white", children } = props;
  return (
    <div className={`text-lg md:text-xl lg:text-2xl ${color}`}>{children}</div>
  );
};
