import { useSelector } from "react-redux";
import MatchMakingHeroDisplay from "../components/MatchMakingHeroDisplay";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Matching = () => {
    // Redux
    const yourHero = useSelector((state) => state.heroData.hero.data);
    const user = useSelector((state) => state.userAuth.user);

    // Navigate
    const navigate = useNavigate();

    // Bot data
    const [isLoading, setLoading] = useState(true);
    const [botData, setBotData] = useState(null);

    // Fetching bot data
    useEffect(() => {
        axios
            .get("/api/Game/GetBotHeroData", {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then(function (response) {
                setBotData(response.data.data);
                return axios.post(
                    "/api/Game/GetSingleplayerMatchResult",
                    response.data.data,
                    {
                        headers: { Authorization: `Bearer ${user.token}` },
                    }
                );
            })
            .then(function (response) {
                setTimeout(() => {
                    document.getElementById("game_start_modal").showModal();

                    setTimeout(() => {
                        document.getElementById("game_start_modal").close();
                        navigate("/gameplay", { state: response.data.data });
                    }, 1500);
                }, 1000);
            })
            .catch(function (error) {
                navigate("/");
                toast.error(error.message);
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="w-full h-full relative flex flex-col lg:flex-row-reverse justify-center gap-2 p-2">
            {/* Enemy */}
            <MatchMakingHeroDisplay
                flexDirection={"flex-col"}
                imgDirection={"rotate-180"}
                hero={botData}
                isLoading={isLoading}
            />

            {/* You */}
            <MatchMakingHeroDisplay
                flexDirection={"flex-col-reverse lg:flex-col"}
                hero={yourHero}
                imgDirection={"lg:rotate-180"}
            />

            <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 lg:h-40 lg:w-40"
                src="/assets/icons/Versus.png"
            />
        </div>
    );
};

export default Matching;
