import error404 from "../assets/images/error-404.png"
import {NavLink} from "react-router-dom";

export const NoMatch = () => {
    return (
        <div>
            <img
                style={
                    {
                        "margin": "25px auto",
                    }
                }
                src={error404}
                alt=""
            />
            <div
                style={
                    {
                        "textAlign": "center",
                    }
                }
            >
                <NavLink to="/">Go to home page</NavLink>
            </div>
        </div>
    )
}