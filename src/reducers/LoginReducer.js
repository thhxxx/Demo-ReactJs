import {createSlice} from "@reduxjs/toolkit";

const LoginReducer = createSlice({
    name: "LoginReducer",
    initialState: {
        isLogin: !!localStorage.getItem("tokenLogin"),
        accounts: [
            {
                username: "admin",
                password: "admin"
            }
        ]
    },
    reducers: {
        login: (state, action) => {
            const {username, password, isChecked} = action.payload

            // eslint-disable-next-line array-callback-return
            state.accounts.map((value) => {
                if (username === value.username && password === value.password && isChecked === true) {
                    localStorage.setItem("tokenLogin", username)
                    state.isLogin = true
                } else if (username === value.username && password === value.password && isChecked === false) {
                    state.isLogin = true
                } else {
                    alert("Wrong username or password.")
                }
            })
        },
        logout: state => {
            localStorage.removeItem("tokenLogin")
            state.isLogin = false
        }
    }
})


export const {login, logout} = LoginReducer.actions
export default LoginReducer.reducer