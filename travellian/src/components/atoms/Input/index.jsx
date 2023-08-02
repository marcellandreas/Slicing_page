export const Input = (props) => {
  const { onChange, onClick, name, type, placeholder } = props;
  return (
    <input
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      name={name}
      type={type}
      className="placeholder:text-sm md:placeholder:text-lg banner-input"
    />
  );
};
