import "../assets/css/home.scss"

import {IconBoxes} from "../components/IconBoxes";
import {Ads} from "../components/Ads";
import {Banner} from "../components/Banner";
import {Products} from "../components/Products";

export const Home = () => {
    return (
        <div className="home">
            <div className="left">
                <Ads/>
                <IconBoxes/>
            </div>
            <div className="right">
                <Banner/>
                <Products/>
            </div>
        </div>
    )
}