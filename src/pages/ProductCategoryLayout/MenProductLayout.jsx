import { Outlet } from "react-router-dom";

const MenProduct = () => {
  const param = location?.pathname.split("/");
  console.log(param);
  return (
    <div>
      <div className="flex gap-1 justify-start p-3">
        <p>Home</p>/<p>Product</p>/
        <p className="text-amber-600">{param[param?.length - 1]} </p>
      </div>
      <Outlet />
    </div>
  );
};

export default MenProduct;
