import { AiOutlineArrowRight } from "react-icons/ai";

const Feature = () => {
  return (
    <section className="w-ful my-[120px]">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col gap-[52px] w-[358px] hover:bg-secondary2 hover:rounded-2xl transition">
          <div className="flex flex-col gap-5 text-center p-3 ">
            <h3 className="text-2xl ">Project Plan</h3>
            <p className="text-[20px]">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
          </div>
          <div className="text-center mx-auto">
            <button className="flex items-center justify-center gap-x-3">
              <p>Read More</p>
              <AiOutlineArrowRight className="text-primary" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[52px] w-[358px] hover:bg-secondary2 hover:rounded-2xl transition">
          <div className="flex flex-col gap-5 text-center p-3">
            <h3 className="text-2xl">Interior Work</h3>
            <p className="text-[20px]">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
          </div>
          <div className="text-center mx-auto">
            <button className="flex items-center justify-center gap-x-3">
              <p>Read More</p>
              <AiOutlineArrowRight className="text-primary" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[52px] w-[358px] hover:bg-secondary2 hover:rounded-2xl transition">
          <div className="flex flex-col gap-5 text-center p-3">
            <h3 className="text-2xl">Realization</h3>
            <p className="text-[20px]">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
          </div>
          <div className="text-center mx-auto">
            <button className="flex items-center justify-center gap-x-3">
              <p>Read More</p>
              <AiOutlineArrowRight className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
