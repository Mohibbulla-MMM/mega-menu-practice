import bgImage from "../../assets/image/section-header-image.png";
const SectionHeader = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "auto 20px",
      }}
      className={`flex text-amber-600 italic   justify-center items-center bg-contain bg-no-repeat bg-bottom  py-6 text-2xl mb-4  relative z-100 `}
    >
      {children}
      <div className="absolute w-[250%] h-[1px] bg-amber-600 bottom-[-2px] z-[-1]"></div>
    </div>
  );
};

export default SectionHeader;
