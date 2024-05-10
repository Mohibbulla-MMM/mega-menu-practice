import SectionHeader from "../../../../utility/SectionHeader/SectionHeader";
import image from "../../../../assets/product-image/hair-care.jpg";
import MyContainer from "../../../../utility/MyContainer/MyContainer";

const HairCar = () => {
  return (
    <MyContainer>
      <SectionHeader>Hair Care</SectionHeader>
      <div>
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
    </MyContainer>
  );
};

export default HairCar;
