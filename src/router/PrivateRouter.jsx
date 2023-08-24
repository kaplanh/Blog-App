import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../helper/ToastNotify";

const PrivateRouter = () => {
    const { currentUser } = useSelector((state) => state.auth);
    let location = useLocation();

    if (!currentUser?.username) {
        toastWarnNotify("You need to login first");
        return <Navigate to="/login" state={{ from: location }} replace />;
        // ?state={{ from: location }} Bu, kullanıcının önceki sayfadan geldiği yeri belirtir ve oturum açma sonrasında bu sayfaya geri dönmek istediğimizi gösterir.
        // ?replace özelliği kullanılarak, geçmişteki rotayı değiştirir, böylece "geri" düğmesi ile önceki sayfaya dönülmez.
    } else {
        return <Outlet />;
    }
};

export default PrivateRouter;
