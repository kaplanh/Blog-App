import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
    const { token } = useSelector((state) => state.auth);

    //* Axios Instance for Private API Request
    //?stock islemlerinde post,delete ... olacagi icin Token li istekler icin
    const axiosWithToken = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        headers: { Authorization: `Token ${token}` },
    });

    //* Axios Instance for Public API Request
    //?Login,register,logout gibi Token siz istekler icin
    const axiosWithoutToken = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
    });

    return { axiosWithToken, axiosWithoutToken };
};

export default useAxios;
