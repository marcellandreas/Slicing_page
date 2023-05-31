import { AiOutlineRight } from "react-icons/ai";

// Image Project
import Project1 from "../assets/Project/Project1.png";
import Project2 from "../assets/Project/Project2.png";
import Project3 from "../assets/Project/Project3.png";
import Project4 from "../assets/Project/Project4.png";

const Project = () => {
  return (
    <section className="w-full my-[120px] ">
      {/* Heading */}
      <div className="text-center transition mb-[90px]">
        <h1 className="text-5xl mb-2">Follow Our Projects</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable <br />
          content of page lookings at its layouts points.
        </p>
      </div>
      {/* Project */}
      <div className="flex justify-between flex-wrap gap-10">
        {/* Card Project 1  */}
        <div className="w-[450px] flex flex-col gap-4">
          {/* Image */}
          <div>
            <img src={Project1} alt="" />
          </div>
          {/* Content*/}
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-[25px]">Modern Kitchan</h4>
              <p className="text-[22px]">Decor / Artchitecture</p>
            </div>
            <button className="bg-primary3 w-[70px] h-[70px] rounded-full flex items-center justify-center">
              <AiOutlineRight />
            </button>
          </div>
        </div>
        {/* Card Projecy 2 */}
        <div className="w-[450px] flex flex-col gap-4">
          {/* Image */}
          <div>
            <img src={Project2} alt="" />
          </div>
          {/* Content*/}
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-[25px]">Modern Kitchan</h4>
              <p className="text-[22px]">Decor / Artchitecture</p>
            </div>
            <button className="bg-primary3 w-[70px] h-[70px] rounded-full flex items-center justify-center">
              <AiOutlineRight />
            </button>
          </div>
        </div>
        {/* Card Projetc 3 */}
        <div className="w-[450px] flex flex-col gap-4">
          {/* Image */}
          <div>
            <img src={Project3} alt="" />
          </div>
          {/* Content*/}
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-[25px]">Modern Kitchan</h4>
              <p className="text-[22px]">Decor / Artchitecture</p>
            </div>
            <button className="bg-primary3 w-[70px] h-[70px] rounded-full flex items-center justify-center">
              <AiOutlineRight />
            </button>
          </div>
        </div>
        {/* Card Project 4 */}
        <div className="w-[450px] flex flex-col gap-4">
          {/* Image */}
          <div className="rounded-bl-[60px]">
            <img className="rounded-bl-[60px]" src={Project4} alt="" />
          </div>
          {/* Content*/}
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-[25px]">Modern Kitchan</h4>
              <p className="text-[22px]">Decor / Artchitecture</p>
            </div>
            <button className="bg-primary3 w-[70px] h-[70px] rounded-full flex items-center justify-center">
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
