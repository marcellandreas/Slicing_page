import { Input, Label } from "../../atoms";

export const FormSearch = ({ data, dataValue }) => {
  return (
    <form className="flex md:gap-x-[0px] md:gap-y-[40px] lg:gap-10 md:justify-between 2xl:justify-start 2xl:gap-5 gap-10  w-full flex-wrap p-5 md:p-0 ">
      <div className="flex flex-col gap-3 w-full md:w-[48%] lg:w-[225px]">
        <Label>DESTINATION</Label>
        <Input
          type="text"
          name="destination"
          value={data.destination}
          onChange={dataValue}
          placeholder="Dubai"
        />
      </div>
      <div className="flex flex-col gap-3 w-full md:w-[48%]  lg:w-[225px]">
        <Label>PERSON</Label>
        <select className="text-sm md:text-base lg:text-lg xl:text-xl">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>
      <div className="flex flex-col gap-3 w-full md:w-[48%] lg:w-[225px]">
        <Label>Check IN</Label>
        <select className="text-sm md:text-base lg:text-lg xl:text-xl">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>
      <div className="flex flex-col gap-3 w-full md:w-[48%] lg:w-[225px] ">
        <Label>Check OUT</Label>
        <select className="text-sm md:text-base lg:text-lg xl:text-xl">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>
    </form>
  );
};
