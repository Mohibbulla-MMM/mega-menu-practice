import SectionHeader from "../../../../utility/SectionHeader/SectionHeader";
import image from "../../../../assets/product-image/make.jpg";
import MyContainer from "../../../../utility/MyContainer/MyContainer";

const Makeup = () => {
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

export default Makeup;
