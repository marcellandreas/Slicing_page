export const Layout = (props) => {
  const { children, gap = "gap-[100px]" } = props;
  return (
    <section
      className={`px-4 py-20 2xl:py-[140px] 2xl:px-[182px] flex flex-col justify-center items-center bg-blue-200 ${gap} `}
    >
      {children}
    </section>
  );
};
