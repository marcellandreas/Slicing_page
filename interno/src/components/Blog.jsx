import { AiOutlineRight } from "react-icons/ai";
import Blog1 from "../assets/Blogs/Blog1.png";
import Blog2 from "../assets/Blogs/Blog2.png";
import Blog3 from "../assets/Blogs/Blog3.png";

const Blog = () => {
  return (
    <section className="w-full my-[120px]">
      <div className="flex flex-col gap-[52px] p-0">
        {/* header */}
        <div className="text-center ">
          <h1 className="text-5xl font-normal mb-3">Article & News</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content <br /> of a page when lookings at its
            layouts the points of using.
          </p>
        </div>
        {/* Content Blogs */}
        <div className="flex flex-row flex-1 items-center justify-between gap-5 ">
          {/* card Blog */}
          <div
            id="border-def"
            className=" w-[382px] bg-secondary2 flex justify-center items-center flex-col p-5 rounded-[50px] gap-y-5"
          >
            <div className="">
              <img src={Blog1} alt="" />
            </div>
            {/* Content Card Blog */}
            <div className="flex  flex-col gap-[30px] px-5">
              <p className="text-[25px] pr-7 ">
                Let’s Get Solution For Building Construction Work
              </p>
              <div className="flex justify-between items-center">
                <p>26, Desember 2023</p>
                <div className="flex justify-center items-center rounded-full w-[52px] h-[52px] bg-primary3">
                  <AiOutlineRight />
                </div>
              </div>
            </div>
          </div>
          {/* Card Blog 2 */}
          <div
            id="border-def"
            className=" w-[382px] bg-primary3 flex justify-center items-center flex-col p-5 rounded-[50px] gap-y-5"
          >
            <div className="">
              <img src={Blog2} alt="" />
            </div>
            {/* Content Card Blog */}
            <div className="flex  flex-col gap-[30px] px-5">
              <p className="text-[25px] pr-7 ">
                Low Cost Latest Invented Interior Designing Ideas.
              </p>
              <div className="flex justify-between items-center">
                <p>26, Desember 2023</p>
                <div className="flex justify-center items-center rounded-full w-[52px] h-[52px] bg-primary3">
                  <AiOutlineRight />
                </div>
              </div>
            </div>
          </div>
          {/* Card Blog 3 */}
          <div
            id="border-def"
            className=" w-[382px] bg-secondary2 flex justify-center items-center flex-col p-5 rounded-[50px] gap-y-5"
          >
            <div className="">
              <img src={Blog3} alt="" />
            </div>
            {/* Content Card Blog */}
            <div className="flex  flex-col gap-[30px] px-5">
              <p className="text-[25px] pr-7 ">
                Best For Any Office & Business Interior Solution
              </p>
              <div className="flex justify-between items-center">
                <p>26, Desember 2023</p>
                <div className="flex justify-center items-center rounded-full w-[52px] h-[52px] bg-primary3">
                  <AiOutlineRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
