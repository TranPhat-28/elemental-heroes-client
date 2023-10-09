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
import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeUserAuth } from "../redux/features/auth/authSlice";
import {
    GetElementImgPath,
    GetHeroImgPath,
    GetHeroType,
} from "../helpers/Helpers";
import EditNameModal from "../components/EditNameModal";

const Formation = () => {

    // Mock data
    const mockData = [{ id: 1, name: "A", iconUrl: "https://picsum.photos/200", element: "Fire" },
        { id: 2, name: "B", iconUrl: "https://picsum.photos/200", element: "Water" },
        { id: 3, name: "C", iconUrl: "https://picsum.photos/200", element: "Wind" },
        { id: 4, name: "D", iconUrl: "https://picsum.photos/200", element: "Electric" }]

    // Data storing object
    const [heroInfo, setHeroInfo] = useState({});

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
                <div className="h-2/3 md:h-full w-full md:w-2/3 flex flex-col justify-center items-center">
                    <div className="w-full flex justify-center">
                        <p className="border w-fit text-center text-4xl font-bold px-5">
                            {heroInfo.name}
                        </p>
                        <button className="btn btn-outline btn-primary">
                            <AiOutlineEdit
                                size={"2rem"}
                                onClick={() =>
                                    document
                                        .getElementById("change_name_modal")
                                        .showModal()
                                }
                            />
                        </button>
                    </div>

                    <img
                        src={GetHeroImgPath(
                            GetHeroType(
                                heroInfo.attackType,
                                heroInfo.damageType
                            )
                        )}
                        className="h-52 w-52 md:w-72 md:h-72 lg:w-80 lg:h-80 self-center"
                    />
                    {/* Weapon and skills container */}
                    <div className="flex gap-5 sm:gap-8 justify-center">
                        <Tile size={"large"} data={mockData[0]}/>
                        <Tile data={mockData[1]}/>
                        <Tile data={mockData[2]}/>
                        <Tile data={mockData[3]}/>
                    </div>
                </div>
                <div className="h-1/3 md:h-full lg:flex lg:items-center w-full md:w-1/3 p-2">
                    <div className="h-full lg:h-3/4 w-full grid gap-2 grid-cols-2 md:grid-cols-1">
                        <Stat
                            icon={<GiMedicalPack className="text-4xl" />}
                            value={`${heroInfo.hp} + 0`}
                        />
                        <Stat
                            icon={
                                <img
                                    className="h-9 w-9"
                                    src={GetElementImgPath(heroInfo.element)}
                                />
                            }
                            value={heroInfo.element}
                        />
                        <Stat
                            position={"md:row-start-2"}
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
                            position={"md:row-start-3"}
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
            <EditNameModal heroInfo={heroInfo} setHeroInfo={setHeroInfo} />
        </div>
    );
};

export default Formation;
