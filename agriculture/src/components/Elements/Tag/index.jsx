const Tag = (props) => {
  const { children } = props;
  return (
    <div className="flex bg-primary-1 text-white rounded-xl place-self-start ml-6">
      <p className="font-semibold text-[15px] text-center w-full px-3 py-2">
        {children}
      </p>
    </div>
  );
};

export default Tag;
