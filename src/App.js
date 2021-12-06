import "./assets/css/style.scss"
import {Home} from "./views/Home";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./layouts/Layout";
import {NoMatch} from "./layouts/NoMatch";
import {Login} from "./views/Login";
import {useSelector} from "react-redux";
import {AddNew} from "./views/AddNew";

function App() {
    const isLogin = useSelector(state => state.LoginReducer.isLogin)
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={isLogin ? <Layout/> : <Login/>}>
                    <Route index element={<Home/>}/>
                    <Route path="add-new" element={<AddNew/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
