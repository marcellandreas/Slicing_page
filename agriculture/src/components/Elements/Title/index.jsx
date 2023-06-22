const Title = (props) => {
  const {
    subTitle,
    title,
    variant = "text-center",
    sizeTitle = "text-h2",
    colorTitle = "text-primary-1",
    mdSizeTitle = "max-md:text-h4",
  } = props;
  return (
    <div className={`${variant} text-primary-1`}>
      <p className={`md:text-h4 text-h6 text-primary-2 mb-2 font-brush`}>
        {subTitle}
      </p>
      <h3
        className={`${colorTitle} ${sizeTitle} ${mdSizeTitle} font-extrabold `}
      >
        {title}
      </h3>
    </div>
  );
};
export default Title;
