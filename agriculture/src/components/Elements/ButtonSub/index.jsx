export const ButtonSub = (props) => {
  const { children } = props;
  return (
    <button className="absolute top-[50%] left-[50%] py-[33px] px-[83px] rounded-[20px] abso flex justify-center items-center  text-primary-1 bg-white">
      <p className="text-h6 font-medium">{children}</p>
    </button>
  );
};
