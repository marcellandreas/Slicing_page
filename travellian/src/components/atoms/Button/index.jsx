export const Button = (props) => {
  const { onChange, onClick, children } = props;
  return (
    <button
      onChange={onChange}
      onClick={onClick}
      className="flex justify-center items-center gap-1 py-4 px-6 rounded-xl text-xl uppercase bg-[#FF7654]  text-white "
    >
      {children}
    </button>
  );
};
