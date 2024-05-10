import SectionHeader from "../../../../utility/SectionHeader/SectionHeader";
import imagePant from "../../../../assets/product-image/pant.jpg";
import MyContainer from "../../../../utility/MyContainer/MyContainer";

const Pant = () => {
  return (
    <MyContainer>
      <SectionHeader>Pant</SectionHeader>
      <div>
        <figure>
          <img src={imagePant} alt="" />
        </figure>
      </div>
    </MyContainer>
  );
};

export default Pant;
