import Banner from "../componant/Home/Banner";
import ItameSlider from "../componant/Home/ItameSlider";
import SectionTitle from "../componant/SectionTitle";

const Home = () => {
    return (
        <div>
            <Banner/>
            <SectionTitle 
            subHeading={"From 12.30pm to 1.00am"}
            heading={"Order Online"}
            ></SectionTitle>
            <ItameSlider/>
        </div>
    );
};

export default Home;