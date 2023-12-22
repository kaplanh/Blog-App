import { useDispatch } from "react-redux";
import {
    fetchStart,
    loginSuccess,
    logoutSuccess,
    registerSuccess,
    fetchFail,
} from "../features/authSlice";
import useAxios from "./useAxios";
import { useNavigate } from "react-router-dom";

const useAuthCalls = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { axiosWithoutToken } = useAxios();

    const login = async (userInfo) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosWithoutToken.post(
                "users/auth/login/",
                userInfo
            );

            dispatch(loginSuccess(data));
            //   toastSuccessNotify("Login performed");
            navigate("/");
        } catch (err) {
            dispatch(fetchFail());
            //   toastErrorNotify("Login can not be performed");
        }
    };

    const logout = async () => {
        dispatch(fetchStart());
        try {
            await axiosWithoutToken.post("users/auth/logout/");
            dispatch(logoutSuccess());

            //   toastSuccessNotify("Logout performed");
            navigate("/");
        } catch (err) {
            dispatch(fetchFail());
            //   toastErrorNotify("Logout can not be performed");
        }
    };

    const register = async (userInfo) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosWithoutToken.post(
                "users/register/",
                userInfo
            );
            dispatch(registerSuccess(data));
            //   toastSuccessNotify("Register performed");
            navigate("/");
        } catch (err) {
            dispatch(fetchFail());
            //   toastErrorNotify("Register can not be performed");
        }
    };

    return {
        login,
        logout,
        register,
    };
};

export default useAuthCalls;
