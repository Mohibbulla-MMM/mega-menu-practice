import SectionHeader from "../../../../utility/SectionHeader/SectionHeader";
import image from "../../../../assets/product-image/skin-care.jpg";
import MyContainer from "../../../../utility/MyContainer/MyContainer";

const SkinCare = () => {
  return (
    <MyContainer>
      <SectionHeader>Tshirt</SectionHeader>
      <div>
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
    </MyContainer>
  );
};

export default SkinCare;
