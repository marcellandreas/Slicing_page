import "./App.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function App() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      {/* <div className="bg-primary-2"> */}
      <button className="button-default-3">
        <p className="button-text">Default Button</p>
        <div className="button-arrow-right-2">
          <AiOutlineArrowRight className="w-3 h-3" />
        </div>
      </button>
      {/* </div> */}
    </section>
  );
}
export default App;
