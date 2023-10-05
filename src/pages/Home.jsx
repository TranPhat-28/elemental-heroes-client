import { useEffect } from "react";
import BattleA from "../assets/gamesStartIcon/BattleA.png";
import BattleB from "../assets/gamesStartIcon/BattleB.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { removeUserAuth } from "../redux/features/auth/authSlice";

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userAuth.user);

    // Fetch user data
    useEffect(() => {
        axios
            .get("/api/Hero", {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then(function (response) {
                if (response.data.data == null) {
                    document.getElementById("tutorial_modal").showModal();
                }
            })
            .catch(function (error) {
                if (error.response.status == 401) {
                    toast.error("Cannot authenticate, please login again");
                    dispatch(removeUserAuth());
                    localStorage.removeItem("ElementalHeroesUser");
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
                <img src={BattleA} className="w-52 h-52 lg:w-80 lg:h-80" />
                <p className="font-bold text-3xl md:text-4xl">
                    AI singleplayer
                </p>
            </div>

            <div className="flex flex-col items-center cursor-pointer rounded-3xl p-4 md:p-6 bg-base-200 hover:shadow-2xl duration-75">
                <img src={BattleB} className="w-52 h-52 lg:w-80 lg:h-80" />
                <p className="font-bold text-3xl md:text-4xl">
                    Battle a friend
                </p>
            </div>
        </div>
    );
};

export default Home;
