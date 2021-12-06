import "../assets/css/login.scss"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../reducers/LoginReducer";

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className="login">
            <div className="box">
                <div className="item">
                    <h1>welcome back!</h1>
                    <div className="form-input">
                        <input
                            className="text-input"
                            type="text"
                            placeholder=" "
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                        <label>Username</label>
                    </div>
                    <div className="form-input">
                        <input
                            className="text-input"
                            type="password"
                            placeholder=" "
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                        <label>Password</label>
                    </div>
                    <div className="form-check-box">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={event => setIsChecked(event.target.checked)}
                        /> Save login
                    </div>
                    <button
                        onClick={() => dispatch(login({username, password, isChecked}))}
                        className="form-button"
                    >Login
                    </button>
                </div>
            </div>
        </div>
    )
}