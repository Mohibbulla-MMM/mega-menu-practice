import { useState } from "react";

const useMouseEnterOfLeave = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const onMouseEnter = () => {
    console.log(`mouse enter the category`);
    setMouseEnter(true);
  };

  const onMouseLeave = () => {
    console.log(`mouse leave the category `);
    setMouseEnter(false);
  };

  // console.log(mouseEnter);

  return { mouseEnter, onMouseEnter, onMouseLeave };
};

export default useMouseEnterOfLeave;
