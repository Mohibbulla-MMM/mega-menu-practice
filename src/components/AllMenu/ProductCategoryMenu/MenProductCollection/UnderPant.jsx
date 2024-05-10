import SectionHeader from "../../../../utility/SectionHeader/SectionHeader";
import image from "../../../../assets/product-image/under-pant.jpg";
import MyContainer from "../../../../utility/MyContainer/MyContainer";

const UnderPant = () => {
  return (
    <MyContainer>
      <SectionHeader>Under Pant</SectionHeader>
      <div>
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
    </MyContainer>
  );
};

export default UnderPant;
