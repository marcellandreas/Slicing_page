const Counter = () => {
  return (
    <section className="w-full bg-primary3 my-[120px]">
      <div className="w-[1000px] mx-auto flex h-[457px] items-center justify-between">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[85px] text-primary">12</h1>
          <p>Years Of Experiance</p>
        </div>
        <p id="counter-line" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[85px] text-primary">85</h1>
          <p>Success Project</p>
        </div>
        <p id="counter-line" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[85px] text-primary">15</h1>
          <p>Active Project</p>
        </div>
        <p id="counter-line" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[85px] text-primary">95</h1>
          <p>Happy Customers</p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
