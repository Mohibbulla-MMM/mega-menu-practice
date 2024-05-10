const MyContainer = ({ children }) => {
  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center flex-col  ">
      {children}
    </div>
  );
};

export default MyContainer;
