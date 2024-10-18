import { Outlet } from "react-router-dom";
import Navbar from "../componant/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;