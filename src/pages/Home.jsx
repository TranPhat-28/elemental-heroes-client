import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import useLogout from "../hooks/Users";
import {
    allowCreatePageAccess,
    allowFeaturePagesAccess,
    denyCreatePageAccess,
    denyFeaturePagesAccess,
} from "../redux/features/routing/routingSlice";

const Home = () => {
    // The Logout hook
    const { logout } = useLogout();

    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userAuth.user);

    // Fetch user data
    useEffect(() => {
        axios
            .get("/api/Hero", {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then(function (response) {
                // If user does not have a hero yet
                if (response.data.data == null) {
                    document.getElementById("tutorial_modal").showModal();

                    // Allow access to CreatePage only and not FeaturePages
                    dispatch(allowCreatePageAccess());
                    dispatch(denyFeaturePagesAccess());
                }
                // If user already has a hero
                else {
                    // Allow FeaturePages but not CreatePage
                    dispatch(allowFeaturePagesAccess());
                    dispatch(denyCreatePageAccess());
                }
            })
            .catch(function (error) {
                if (error.response.status == 401) {
                    toast.error("Cannot authenticate, please login again");
                    logout();

                    console.log(error.response);
                } else {
                    toast.error("Something went wrong");
                    console.log(error);
                }
            });
    }, []);

    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-10">
            <div className="flex flex-col items-center cursor-pointer rounded-3xl p-4 md:p-6 bg-base-200 hover:shadow-2xl duration-75">
                <img
                    src={"assets/gamesStartIcon/BattleA.png"}
                    className="w-52 h-52 lg:w-80 lg:h-80"
                />
                <p className="font-bold text-3xl md:text-4xl">
                    AI singleplayer
                </p>
            </div>

            <div className="flex flex-col items-center cursor-pointer rounded-3xl p-4 md:p-6 bg-base-200 hover:shadow-2xl duration-75">
                <img
                    src={"assets/gamesStartIcon/BattleB.png"}
                    className="w-52 h-52 lg:w-80 lg:h-80"
                />
                <p className="font-bold text-3xl md:text-4xl">
                    Battle a friend
                </p>
            </div>
        </div>
    );
};

export default Home;
