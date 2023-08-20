import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Privaterouter from "./PrivateRouter";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />}>
                <Route path="about" element={<About />} />

                    <Route path="/newblog" element={<PrivateRouter />}>
                        <Route path="" element={<NewBlog />} />
                    </Route>

                    <Route path="/profile" element={<PrivateRouter />}>
                        <Route path="" element={<Profile />} />
                    </Route>

                    
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
