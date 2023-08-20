import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />

            <Route path="/newblog" element={<PrivateRouter />}>
                <Route path="" element={<NewBlog />} />
            </Route>

            <Route path="/profile" element={<PrivateRouter />}>
                <Route path="" element={<Profile />} />
            </Route>

            {/* <Route path="/update-blog/:id" element={<PrivateRouter />}>
                <Route path="" element={<UpdateBlog />} />
            </Route>
            <Route path="/detail/:id" element={<PrivateRouter />}>
                <Route path="" element={<Detail />} />
            </Route> */}

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;
