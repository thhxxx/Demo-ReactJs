import {Outlet} from "react-router-dom";
import {Nav} from "../components/Nav";
import {Footer} from "../views/Footer";

export const Layout = () => {
    return (
        <div>
            <Nav/>
            <div className="view">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}