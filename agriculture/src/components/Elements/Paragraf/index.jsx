const Paragraf = (props) => {
  const { children } = props;
  return (
    <p className="text-[16px] md:text-p text-primary-4 opacity-1 font-serif">
      {children}
    </p>
  );
};

export default Paragraf;
