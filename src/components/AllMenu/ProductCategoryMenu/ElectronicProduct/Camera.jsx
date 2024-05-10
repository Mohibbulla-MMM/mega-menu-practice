import SectionHeader from "../../../../utility/SectionHeader/SectionHeader";
import cameraImage from "../../../../assets/product-image/camera.jpg";
import MyContainer from "../../../../utility/MyContainer/MyContainer";
const Camera = () => {
  return (
    <MyContainer>
      <SectionHeader>Camera</SectionHeader>
      <div>
        <figure>
          <img src={cameraImage} alt="cameraImage" />
        </figure>
      </div>
    </MyContainer>
  );
};

export default Camera;
