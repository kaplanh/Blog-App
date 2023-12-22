// import { axiosWithToken } from "../service/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/blogSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useBlogCalls = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.auth);
    const { axiosWithToken, axiosWithoutToken } = useAxios();

    //!------------- GET CALLS ----------------
    const getBlogData = async (url) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosWithoutToken.get(`api/${url}/`);
            dispatch(getSuccess({ data, url }));
        } catch (error) {
            dispatch(fetchFail());
            console.log(error);
        }
    };
    const getCategoriesData = async (url) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosWithToken.get(`api/${url}/`);
            dispatch(getSuccess({ data, url }));
        } catch (error) {
            dispatch(fetchFail());
            console.log(error);
        }
    };

    const getBlogs = () => getBlogData("blogs");
    const getCategories = () => getCategoriesData("categories");

    //!------------- DELETE CALLS ----------------
    const deleteBlogData = async (url, id) => {
        try {
            await axiosWithToken.delete(`api/${url}/${id}/`);
            toastSuccessNotify(`${url} successfuly deleted`);
            getBlogData(url);
            navigate("/");
        } catch (error) {
            console.log(error);
            toastErrorNotify(`${url} can not be deleted`);
        }
    };

    const deleteBlogs = (id) => deleteBlogData("blogs", id);

    //!------------- POST CALLS ----------------
    const postBlogData = async (info, url) => {
        try {
            await axiosWithToken.post(`api/${url}/`, info);
            toastSuccessNotify(`${url} successfuly added`);
            getBlogData(url);
        } catch (error) {
            console.log(error);
            toastErrorNotify(`${url} can not be added`);
        }
    };

    const postBlog = (info) => postBlogData(info, "blogs");

    //!------------- PUT CALLS ----------------
    const putBlogData = async (info, url) => {
        try {
            await axiosWithToken.put(`api/${url}/${info.id}/`, info);
            toastSuccessNotify(`${url} successfuly updated`);
            getBlogData(url);
        } catch (error) {
            console.log(error);
        }
    };

    const putBlog = (info) => putBlogData(info, "blogs");

    //!------------- Post Comments ----------------
    const postCommentData = async (info, url, getDetailData) => {
        try {
            await axiosWithToken.post(`api/${url}/${info.post}/`, info);
            getDetailData();
            toastSuccessNotify(`${url} successfuly added`);
        } catch (error) {
            console.log(error);
        }
    };
    const postComments = (info, getDetailData) =>
        postCommentData(info, "comments", getDetailData);

    useEffect(() => {
        if (currentUser) {
            getCategories("categories");
        }
    }, [currentUser]);

    return {
        getBlogData,
        getCategories,
        getBlogs,
        postBlog,
        putBlog,
        postComments,
        deleteBlogs,
    };
};

export default useBlogCalls;
