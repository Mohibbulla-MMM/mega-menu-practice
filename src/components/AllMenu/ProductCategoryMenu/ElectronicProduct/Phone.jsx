import MyContainer from "../../../../utility/MyContainer/MyContainer";
import SectionHeader from "../../../../utility/SectionHeader/SectionHeader";
import phoneImage from "../../../../assets/product-image/phone.jpg";

const Phone = () => {
  return (
    <MyContainer>
      <SectionHeader>Phone</SectionHeader>
      <div>
        <figure>
          <img src={phoneImage} alt="phoneImage" />
        </figure>
      </div>
    </MyContainer>
  );
};

export default Phone;
