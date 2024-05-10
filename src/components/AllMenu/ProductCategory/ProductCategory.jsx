import { useState } from "react";

import CategoryBtn from "../../../utility/CategoryBtn/CategoryBtn";
import ElectronicProduct from "../ProductCategoryMenu/ElectronicProduct/ElectronicProduct";
import MenProductCollection from "../ProductCategoryMenu/MenProductCollection/MenProductCollection";
import WomanProductCollection from "../ProductCategoryMenu/WomanProductCollection/WomanProductCollection";

const ProductCategory = () => {
  const [mouseEnter, setMouseEnter] = useState("");
  // console.log(mouseEnter);

  return (
    <div className="bg-white">
      {/* electronic product  ----------- */}
      <div
        onMouseEnter={() => setMouseEnter("electronic")}
        onMouseLeave={() => setMouseEnter("")}
        className="relative"
      >
        <CategoryBtn>Electronics Device</CategoryBtn>
        {mouseEnter === "electronic" ? (
          <div className="absolute bg-white left-[100%] top-[-30%] min-w-40 rounded-xl  z-10 ">
            <ElectronicProduct />
          </div>
        ) : (
          ""
        )}
      </div>

      {/* men collection ----------- */}
      <div
        className="relative"
        onMouseEnter={() => setMouseEnter("men")}
        onMouseLeave={() => setMouseEnter("")}
      >
        <CategoryBtn>Man Collection</CategoryBtn>
        {mouseEnter === "men" ? (
          <div className="absolute bg-white left-[100%] top-[-30%] min-w-40 rounded-xl  z-10 ">
            <MenProductCollection />
          </div>
        ) : (
          ""
        )}
      </div>

      <CategoryBtn>Physical Product</CategoryBtn>
      <CategoryBtn>Online Product</CategoryBtn>
      {/* woman product collection  */}
      <div
        className="relative"
        onMouseEnter={() => setMouseEnter("women")}
        onMouseLeave={() => setMouseEnter("")}
      >
        <CategoryBtn>Woman Collection</CategoryBtn>
        {mouseEnter === "women" ? (
          <div className="absolute bg-white left-[100%] top-[-30%] min-w-40 rounded-xl  z-10 ">
            <WomanProductCollection />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
