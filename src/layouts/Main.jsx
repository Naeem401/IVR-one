import { Outlet } from "react-router-dom";
import Navbar from "../componant/Navbar";
import Footer from "../componant/Footer";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;