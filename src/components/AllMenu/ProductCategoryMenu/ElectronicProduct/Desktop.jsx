import desktopImage from "../../../../assets/product-image/desktop.jpg";
import MyContainer from "../../../../utility/MyContainer/MyContainer";
import SectionHeader from "../../../../utility/SectionHeader/SectionHeader";

 

const Desktop = () => {
    return (
        <MyContainer>
            <SectionHeader>
                Desktop
            </SectionHeader>
            
            <div>
                <figure>
                    <img src={desktopImage} alt="" />
                </figure>
            </div>
        </MyContainer>
    );
};

export default Desktop;