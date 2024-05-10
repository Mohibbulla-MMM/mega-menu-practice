import MyNavLink from "../../../../utility/MyNavLink/MyNavLink";

const MenProductCollection = () => {
  return (
    <div className="space-y-1 min-w-40 capitalize  py-1 rounded-md border border-gray-200">
      <MyNavLink path={"men-product/cap"}>cap</MyNavLink>
      <MyNavLink path={"men-product/t-shirt"}>t-shirt</MyNavLink>
      <MyNavLink path={"men-product/pant"}>pant</MyNavLink>
      <MyNavLink path={"men-product/under-pant"}>under pant</MyNavLink>
    </div>
  );
};

export default MenProductCollection;
