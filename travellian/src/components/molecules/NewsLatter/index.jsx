import { Button } from "../../atoms";
export const NewsLatter = () => {
  return (
    <section className="w-full lg:w-[1000px] 2xl:w-[1102px] px-5 mx-auto xl:relative">
      <section
        style={{ boxShadow: " 0px 0px 4px 0px rgba(0, 0, 0, 0.30)" }}
        className="flex w-full py-10 px-5 flex-col lg:flex-row justify-center items-start lg:items-center  gap-[60px] rounded-[20px] bg-white xl:absolute xl:-top-[100px] "
      >
        <h1 className="text-4xl lg:text-5xl font-normal text-[#767E86]">
          Our Newsletter
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 justify-end items-start self-stretch">
          <div className="flex flex-col gap-4 self-stretch">
            <label className="text-xl"> Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="md:min-w-[377px] bg-[#FFE8D4] placeholder:text-[#FF7757] py-6 placeholder:text-center placeholder:text-xl placeholder:pl-5"
            />
          </div>
          <Button>Subscribe</Button>
        </div>
      </section>
    </section>
  );
};
