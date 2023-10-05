// Components
import Tile from "../components/Tile";
import Stat from "../components/Stat";

// Icons
import { GiMedicalPack } from "react-icons/gi";
import {
    PiSwordBold,
    PiArrowsInLineVerticalBold,
    PiArrowsOutLineVerticalBold,
} from "react-icons/pi";
import { FaShieldHalved, FaHammer, FaReact } from "react-icons/fa6";

// Elements
import Fire from "../assets/elements/fire.png";
import Water from "../assets/elements/water.png";
import Lightning from "../assets/elements/lightning.png";
import Wind from "../assets/elements/wind.png";
import Earth from "../assets/elements/earth.png";

// HeroTypes
import Knight from "../assets/heroes/Knight.png";
import Assassin from "../assets/heroes/Assassin.png";
import Monk from "../assets/heroes/Monk.png";
import Wizard from "../assets/heroes/Wizard.png";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeUserAuth } from "../redux/features/auth/authSlice";
import { GetHeroType } from "../helpers/Helpers";

const Formation = () => {
    // Data storing object
    const [heroInfo, setHeroInfo] = useState({});
    const [heroElement, setHeroElement] = useState(null);
    const [heroAssetImg, setHeroAssetImg] = useState(null);

    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userAuth.user);

    // Load data
    useEffect(() => {
        axios
            .get("/api/Hero", {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then(function (response) {
                setHeroInfo(response.data.data);
                switch (heroInfo.element) {
                    case "Fire":
                        setHeroElement(Fire);
                        break;
                    case "Water":
                        setHeroElement(Water);
                        break;
                    case "Lightning":
                        setHeroElement(Lightning);
                        break;
                    case "Wind":
                        setHeroElement(Wind);
                        break;
                    case "Earth":
                        setHeroElement(Earth);
                        break;
                }
                const heroType = GetHeroType(
                    heroInfo.attackType,
                    heroInfo.damageType
                );
                switch (heroType) {
                    case "Knight":
                        setHeroAssetImg(Knight);
                        break;
                    case "Assassin":
                        setHeroAssetImg(Assassin);
                        break;
                    case "Monk":
                        setHeroAssetImg(Monk);
                        break;
                    case "Wizard":
                        setHeroAssetImg(Wizard);
                        break;
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
        <div className="w-full h-full flex justify-center">
            <div className="w-full max-w-lg h-full md:max-w-4xl flex flex-col md:flex-row p-2">
                <div className="border border-red-500 h-2/3 md:h-full w-full md:w-2/3 flex flex-col justify-center items-center">
                    <p className="font-bold text-4xl">{heroInfo.name}</p>
                    <img
                        src={heroAssetImg}
                        className="h-52 w-52 md:w-72 md:h-72 lg:w-80 lg:h-80 self-center"
                    />
                    {/* Weapon and skills container */}
                    <div className="flex border border-blue-500 gap-5 sm:gap-8 justify-center">
                        <Tile size={"large"} />
                        <Tile />
                        <Tile />
                        <Tile />
                    </div>
                </div>
                <div className="border border-red-500 h-1/3 md:h-full w-full md:w-1/3 p-2">
                    <div className="h-full w-full grid gap-2 grid-cols-2 md:grid-cols-1">
                        <Stat
                            icon={<GiMedicalPack className="text-4xl" />}
                            value={`${heroInfo.hp} + 0`}
                        />
                        <Stat
                            icon={<img className="h-9 w-9" src={heroElement} />}
                            value={heroInfo.element}
                        />
                        <Stat
                            icon={<PiSwordBold className="text-4xl" />}
                            value={`${heroInfo.attack} + 0`}
                        />
                        <Stat
                            icon={
                                heroInfo.attackType == "Melee" ? (
                                    <PiArrowsInLineVerticalBold className="text-4xl" />
                                ) : (
                                    <PiArrowsOutLineVerticalBold className="text-4xl" />
                                )
                            }
                            value={heroInfo.attackType}
                        />
                        <Stat
                            icon={<FaShieldHalved className="text-4xl" />}
                            value={`${heroInfo.defense} + 0`}
                        />
                        <Stat
                            icon={
                                heroInfo.damageType == "Physical" ? (
                                    <FaHammer className="text-4xl" />
                                ) : (
                                    <FaReact className="text-4xl" />
                                )
                            }
                            value={heroInfo.damageType}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Formation;
