import { useEffect, useState } from "react";
import Category from "../AllMenu/Category/Category";
import Header_FooterMenu from "../AllMenu/Header_FooterMenu/Header_FooterMenu";

const Navbar = () => {
  const [homeLocation, setHomeLocation] = useState();

  useEffect(() => {
    const param = location?.pathname;
    setHomeLocation(param);
  }, [homeLocation]);
  // console.log(param);
  return (
    <div className=" w-full flex gap-2 justify-between  ">
      {homeLocation === "/" ? (
        <div>Search bar</div>
      ) : (
        <div>
          <Category />
        </div>
      )}
      {/* common menu  */}
      <div className="flex gap-1">
        <Header_FooterMenu />
      </div>
    </div>
  );
};

export default Navbar;
