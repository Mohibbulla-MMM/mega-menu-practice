import SectionHeader from "../../../../utility/SectionHeader/SectionHeader";
import image from "../../../../assets/product-image/cap.jpg";
import MyContainer from "../../../../utility/MyContainer/MyContainer";

const Cap = () => {
  return (
    <MyContainer>
      <SectionHeader>Pant</SectionHeader>
      <div>
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
    </MyContainer>
  );
};

export default Cap;
