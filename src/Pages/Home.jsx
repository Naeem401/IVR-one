import Banner from "../componant/Home/Banner";
import CallUs from "../componant/Home/CallUs";
import ChefRecommends from "../componant/Home/ChefRecommends";
import Featured from "../componant/Home/Featured/Featured";
import ItameSlider from "../componant/Home/ItameSlider";
import MidBanner from "../componant/Home/MidBanner";
import PopularItem from "../componant/Home/PopularItem";
import Testtimonials from "../componant/Home/Testtimonials";
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
            <MidBanner/>
            <SectionTitle 
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <PopularItem/>
            <CallUs/>
            <SectionTitle 
            subHeading={"Should Try"}
            heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <ChefRecommends/>
            <Featured/>
            <SectionTitle 
            subHeading={"What Our Clients Say"}
            heading={"TESTIMONIALS"}
            ></SectionTitle>
            <Testtimonials/>
        </div>
    );
};

export default Home;