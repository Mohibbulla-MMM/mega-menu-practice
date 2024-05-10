import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
// import Product from "../pages/ProductCategoryLayout/Product";
import Phone from "../components/AllMenu/ProductCategoryMenu/ElectronicProduct/Phone";
import Laptop from "../components/AllMenu/ProductCategoryMenu/ElectronicProduct/Laptop";
import Desktop from "../components/AllMenu/ProductCategoryMenu/ElectronicProduct/Desktop";
import Camera from "../components/AllMenu/ProductCategoryMenu/ElectronicProduct/Camera";
import Tshirt from "../components/AllMenu/ProductCategoryMenu/MenProductCollection/Tshirt";
import Cap from "../components/AllMenu/ProductCategoryMenu/MenProductCollection/Cap";
import Pant from "../components/AllMenu/ProductCategoryMenu/MenProductCollection/Pant";
import UnderPant from "../components/AllMenu/ProductCategoryMenu/MenProductCollection/UnderPant";
import Makeup from "../components/AllMenu/ProductCategoryMenu/WomanProductCollection/Makeup";
import SkinCare from "../components/AllMenu/ProductCategoryMenu/WomanProductCollection/SkinCare";
import HairCar from "../components/AllMenu/ProductCategoryMenu/WomanProductCollection/HairCar";
import MenProductLayout from "../pages/ProductCategoryLayout/MenProductLayout";
import WomanProductLayout from "../pages/ProductCategoryLayout/WomanProductLayout";
import ElectronicProductLayout from "../pages/ProductCategoryLayout/ElectronicProductLayout";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: "nai",
    children: [
      {
        // index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // electronics-product
      {
        path: "electronics-product",
        element: <ElectronicProductLayout />,
        children: [
          {
            path: "phone",
            element: <Phone />,
          },
          {
            path: "laptop",
            element: <Laptop />,
          },
          {
            path: "desktop",
            element: <Desktop />,
          },
          {
            path: "camera",
            element: <Camera />,
          },
        ],
      },
      // men product collection
      {
        path: "men-product",
        element: <MenProductLayout />,
        children: [
          // man product collection
          {
            path: "t-shirt",
            element: <Tshirt />,
          },
          {
            path: "cap",
            element: <Cap />,
          },
          {
            path: "pant",
            element: <Pant />,
          },
          {
            path: "under-pant",
            element: <UnderPant />,
          },
        ],
      },
      //  woman product collection
      {
        path: "woman-product",
        element: <WomanProductLayout />,
        children: [
          // woman product collection
          {
            path: "makeup",
            element: <Makeup />,
          },
          {
            path: "skin-care",
            element: <SkinCare />,
          },
          {
            path: "hair-care",
            element: <HairCar />,
          },
        ],
      },
    ],
  },
]);

export default Route;
