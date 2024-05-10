import MyContainer from "../../../../utility/MyContainer/MyContainer";
import SectionHeader from "../../../../utility/SectionHeader/SectionHeader";
import laptopImage from "../../../../assets/product-image/laptop.jpg";

const Laptop = () => {
  return (
    <MyContainer>
      <SectionHeader>Laptop</SectionHeader>
      <div>
        <figure>
          <img src={laptopImage} alt="" />
        </figure>
      </div>
    </MyContainer>
  );
};

export default Laptop;
