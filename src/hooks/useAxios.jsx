import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
    const { token } = useSelector((state) => state.auth);
    //?stock islemlerinde post,delete ... olacagi icin Token li istekler icin
    const axiosWithToken = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        headers: { Authorization: `Token ${token}` },
    });

    //?Login,register,logout gibi Token siz istekler icin
    const axiosPublic = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
    });

    return { axiosWithToken, axiosPublic };
};

export default useAxios;
