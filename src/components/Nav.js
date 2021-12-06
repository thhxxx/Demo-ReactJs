import "../assets/css/nav.scss"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../reducers/LoginReducer";

export const Nav = () => {
    const dispatch = useDispatch()
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        <i className="fal fa-home-lg-alt"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add-new">
                        <i className="fal fa-plus"/>
                    </NavLink>
                </li>
                <li><i className="fal fa-shopping-basket"/></li>
                <li
                    onClick={() => {
                        dispatch(logout())
                    }}
                >
                    <i className="fal fa-sign-out-alt"/>
                </li>
            </ul>
        </nav>
    )
}