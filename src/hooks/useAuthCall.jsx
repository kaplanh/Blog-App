
import axios from "axios";
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

const useAuthCall = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async (userData) => {
        dispatch(fetchStart());
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/users/auth/login/`,
                userData
            );
            dispatch(loginSuccess(data));
            toastSuccessNotify("login islemi basarili");
            navigate("/stock");
        } catch (error) {
            console.log(error.message);
            dispatch(fetchFail());
            toastErrorNotify(error.response.data.non_field_errors[0]);
        }
        //? axios kullandigimizda status koda bakmadan catch icindeki errordeki hata mesajlarini alip  toastErrorNotify(error.response.data.non_field_errors[0])  seklinde istersek backend in hazirladigi hata mesajini istenilen dilde bu sekilde tostify icinde ekrana bastirabiliriz
    };

    const logout = async () => {
        dispatch(fetchStart());
        try {
            await axios.post(
                `${import.meta.env.VITE_BASE_URL}/users/auth/logout/`
            );
            dispatch(logoutSuccess());
            toastSuccessNotify("logout islemi basarili");
            navigate("/");
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify("Logout islemi basarisiz");
        }
    };

    const register = async (userData) => {
        dispatch(fetchStart());
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/users/register/`,
                userData
            );
            dispatch(registerSuccess(data));
            toastSuccessNotify("kayit islemi basarili");
            navigate("/stock");
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify("Kayit islemi basarisiz olmustur.");
        }
    };

    return { login, logout, register };
};

export default useAuthCall;
