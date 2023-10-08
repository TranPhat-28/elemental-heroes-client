import { useDispatch } from "react-redux";
import { removeUserAuth } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { denyCreatePageAccess, denyFeaturePagesAccess } from "../redux/features/routing/routingSlice";

const useLogout = () => {

    const dispatch = useDispatch();

    const logout = () => {
        // Remove access to everything
        dispatch(denyCreatePageAccess());
        dispatch(denyFeaturePagesAccess());

        // Remove User
        dispatch(removeUserAuth());
        localStorage.removeItem("ElementalHeroesUser");

        // Notify
        toast.success("Logout success");
    }

    return { logout };
}

export default useLogout;