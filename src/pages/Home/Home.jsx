import ProductCategory from "../../components/AllMenu/ProductCategory/ProductCategory";
import banner from "../../assets/banner/home-baner.jpg";

const Home = () => {
  return (
    <div className="flex p-3 max-w-6xl mx-auto ">
      {/* <ProductCategory /> */}
      <div className=" min-w-40">
        <ProductCategory />
      </div>
      {/* banner section  */}
      <div className="w-full flex-1">
        <figure>
          <img src={banner} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Home;
