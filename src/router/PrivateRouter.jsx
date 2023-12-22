import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../helper/ToastNotify";

const PrivateRouter = () => {
    const { currentUser } = useSelector((state) => state.auth);
    let location = useLocation();

    if (!currentUser?.username) {
        toastWarnNotify("You need to login first");
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        return <Outlet />;
    }
};

export default PrivateRouter;
