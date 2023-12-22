import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Detail from "../pages/Detail";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";
import FooTer from "../components/FooTer";
import MyBlogs from "../pages/MyBlogs";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/newblog" element={<PrivateRouter />}>
                    <Route path="" element={<NewBlog />} />
                </Route>
                <Route path="/myblogs" element={<PrivateRouter />}>
                    <Route path="" element={<MyBlogs />} />
                </Route>
                <Route path="/profile" element={<PrivateRouter />}>
                    <Route path="" element={<Profile />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/detail/:id" element={<PrivateRouter />}>
                    <Route path="" element={<Detail />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <FooTer />
        </BrowserRouter>
    );
};

export default AppRouter;
