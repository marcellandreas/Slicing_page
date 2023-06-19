const Title = (props) => {
  const {
    subTitle,
    title,
    variant = "text-center",
    sizeTitle = "text-h2",
  } = props;
  return (
    <div className={`${variant} text-primary-1`}>
      <p className={`text-h4 text-primary-2 mb-2 font-brush`}>{subTitle}</p>
      <h3 className={`${sizeTitle} font-extrabold`}>{title}</h3>
    </div>
  );
};
export default Title;
