import { AiOutlineArrowRight } from "react-icons/ai";
import "./style.css";

const Button = (props) => {
  const {
    children,
    variant = "button-default",
    icon = "button-arrow-right-2",
  } = props;
  return (
    <button className={`${variant}`}>
      <div className="button-text">{children}</div>
      <AiOutlineArrowRight className={`${icon}`} />
    </button>
  );
};

export default Button;
