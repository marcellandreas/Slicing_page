import { AiOutlineArrowRight } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="rounded-[70px] w-full my-[120px] bg-primary2 text-primary3 py-[80px] flex flex-col justify-center items-center gap-8">
      <div className="text-center flex flex-col gap-[11px]">
        <h1 className="text-[50px]">Wanna join the interno?</h1>
        <p className="text-[22px]">
          It is a long established fact will be distracted.
        </p>
      </div>
      <button className="outline-none rounded-[18px] flex items-center   gap-x-3 bg-primary px-[26px] py-[27px]">
        <p>Contact With Us</p>
        <AiOutlineArrowRight />
      </button>
    </section>
  );
};

export default Contact;
