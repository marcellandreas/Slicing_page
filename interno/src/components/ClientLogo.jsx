import ClientLogo1 from "../assets/clientLogo/01.svg";
import ClientLogo2 from "../assets/clientLogo/02.svg";
import ClientLogo3 from "../assets/clientLogo/03.svg";
import ClientLogo4 from "../assets/clientLogo/04.svg";
import ClientLogo5 from "../assets/clientLogo/05.svg";

const ClientLogo = () => {
  return (
    <section className="my-[120px] w-full">
      <div className="flex flex-wrap items-center   justify-between">
        <img className="w-[131px]" src={ClientLogo1} alt="" />
        <img className="w-[131px]" src={ClientLogo2} alt="" />
        <img className="w-[131px]" src={ClientLogo3} alt="" />
        <img className="w-[131px]" src={ClientLogo4} alt="" />
        <img className="w-[131px]" src={ClientLogo5} alt="" />
      </div>
    </section>
  );
};

export default ClientLogo;
