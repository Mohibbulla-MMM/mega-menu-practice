import MyNavLink from "../../../../utility/MyNavLink/MyNavLink";

const WomanProductCollection = () => {
  return (
    <div className="space-y-1 min-w-40 capitalize  py-1 rounded-md border border-gray-200">
      <MyNavLink path={"woman-product/makeup"}>makeup</MyNavLink>
      <MyNavLink path={"woman-product/skin-care"}>skin care</MyNavLink>
      <MyNavLink path={"woman-product/hair-care"}>hair care</MyNavLink>
    </div>
  );
};

export default WomanProductCollection;
