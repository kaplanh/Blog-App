import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";
import MyBlogs from "../pages/MyBlogs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Detail from "../pages/Detail";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/myblogs" element={<MyBlogs />} />

                <Route path="/newblog" element={<PrivateRouter />}>
                    <Route path="" element={<NewBlog />} />
                </Route>

                <Route path="/profile" element={<PrivateRouter />}>
                    <Route path="" element={<Profile />} />
                </Route>
                <Route path="/detail/:id" element={<PrivateRouter />}>
                    <Route path="" element={<Detail />} />
                </Route>
                {/* <Route path="/update-blog/:id" element={<PrivateRouter />}>
                <Route path="" element={<UpdateBlog />} />
            </Route>
            <Route path="/detail/:id" element={<PrivateRouter />}>
                <Route path="" element={<Detail />} />
            </Route> */}

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
