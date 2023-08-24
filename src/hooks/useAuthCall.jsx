import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    fetchFail,
    fetchStart,
    loginSuccess,
    logoutSuccess,
    registerSuccess,
} from "../features/authSlice";
import useAxios from "./useAxios";

const useAuthCall = () => {
    const dispatch = useDispatch();
    const { axiosPublic } = useAxios();
    const navigate = useNavigate();

    const login = async (userInfo) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosPublic.post(
                `/users/auth/login/`,
                userInfo
            );

            dispatch(loginSuccess(data));
            toastSuccessNotify("login islemi basarili");
            //   toastSuccessNotify("Login performed");
            navigate("/");
        } catch (error) {
            console.log(error.message);
            dispatch(fetchFail());
            toastErrorNotify("login islemi basarisiz");
            //   toastErrorNotify("Login can not be performed");
        }
    };

    const logout = async () => {
        dispatch(fetchStart());
        try {
            await axiosPublic.post(`/users/auth/logout/`);
            dispatch(logoutSuccess());
            toastSuccessNotify("logout islemi basarili");
            //   toastSuccessNotify("Logout performed");
            navigate("/login");
        } catch (error) {
            // console.log(error);
            dispatch(fetchFail());
            toastErrorNotify("Logout islemi basarisiz");
            //   toastErrorNotify("Logout can not be performed");
        }
    };

    const register = async (userInfo) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosPublic.post(
                `/users/register/`,
                userInfo
            );
            dispatch(registerSuccess(data));
            toastSuccessNotify("kayit islemi basarili");
            //   toastSuccessNotify("Register performed");
            navigate("/stock");
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify("Kayit islemi basarisiz olmustur.");
            //   toastErrorNotify("Register can not be performed");
        }
    };

    return { login, logout, register };
};

export default useAuthCall;
