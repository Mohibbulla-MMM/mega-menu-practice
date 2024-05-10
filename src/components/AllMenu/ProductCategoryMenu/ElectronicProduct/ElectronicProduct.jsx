import MyNavLink from "../../../../utility/MyNavLink/MyNavLink";

const ElectronicProduct = () => {
  return (
    <div className="space-y-1 min-w-40   py-1 rounded-md border border-gray-200">
      <MyNavLink path={"electronics-product/phone"}>Phone</MyNavLink>
      <MyNavLink path={"electronics-product/camera"}>Camera</MyNavLink>
      <MyNavLink path={"electronics-product/desktop"}>Desktop</MyNavLink>
      <MyNavLink path={"electronics-product/laptop"}>Laptop</MyNavLink>
      {/* <h1 className="bg-amber-100"></h1>   */}
    </div>
  );
};

export default ElectronicProduct;
