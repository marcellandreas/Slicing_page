const Paragraf = (props) => {
  const { children } = props;
  return (
    <>
      <p className="text-p text-primary-4 font-serif">{children}</p>
    </>
  );
};

export default Paragraf;
