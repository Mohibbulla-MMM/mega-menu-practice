import useMouseEnterOfLeave from "../../../hooks/useMouseEnterOfLeave/useMouseEnterOfLeave";
import ProductCategory from "../ProductCategory/ProductCategory";

const Category = () => {
  // my mouse event hook
  const { mouseEnter, ...MouseEvent } = useMouseEnterOfLeave();
  //   console.log(mouseEnter);

  return (
    <div>
      <div
        className="text-lg px-2 cursor-pointer bg-gray-100 rounded-md relative z-50"
        {...MouseEvent}
      >
        Category
        {mouseEnter ? (
          <div className="absolute bg-white top-[100%] pt-2  min-w-44 border border-t-0 border-gray-200 rounded-xl py-2 z-10 ">
            <ProductCategory />
          </div>
        ) : (
          ""
        )}
      </div>

      {/* product category */}
    </div>
  );
};

export default Category;
