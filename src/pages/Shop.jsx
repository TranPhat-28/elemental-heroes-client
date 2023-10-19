import axios from "axios";
import { useEffect, useState } from "react";
import {
    RiMoneyDollarCircleLine,
    RiMoneyDollarCircleFill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import GetItemFromChestModal from "../components/GetItemFromChestModal";
import {
    addBalance,
    removeOwnedSkills,
    removeOwnedWeapons,
} from "../redux/features/userData/userDataSlice";
import { toast } from "react-toastify";
import useLogout from "../hooks/Users";

const Shop = () => {
    // Logout
    const logout = useLogout();

    // Loading button
    const [weaponChestLoading, setWeaponChestLoading] = useState(false);
    const [skillChestLoading, setSkillChestLoading] = useState(false);

    // Data for the Modal
    const [modalData, setModalData] = useState(null);

    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userAuth.user);
    const balance = useSelector((state) => state.userData.balance);

    // Load data
    useEffect(() => {
        // Only load if no data is presented
        if (balance === null) {
            // Show the loading modal
            document.getElementById("loading_modal").showModal();

            // Fetch balance
            axios
                .get("/api/OpenChest/GetBalance", {
                    headers: { Authorization: `Bearer ${user.token}` },
                })
                .then((response) => {
                    // Set Balance data
                    dispatch(addBalance(response.data.data));
                })
                .catch(function (error) {
                    console.log(error);
                    if (error.response.status == 401) {
                        toast.error("Cannot authenticate, please login again");
                        logout();

                        console.log(error.response);
                    } else {
                        toast.error("Something went wrong");
                        console.log(error);
                    }
                })
                .finally(() => {
                    // Close the loading modal
                    document.getElementById("loading_modal").close();
                });
        }
    }, []);

    // Open Chest
    const openChest = (type) => {
        if (type !== "weapon" && type !== "skill") {
            return;
        } else {
            // URL string
            let api = "";

            if (type === "weapon") {
                setWeaponChestLoading(true);
                api = "/api/OpenChest/OpenWeaponChest";
            } else if (type === "skill") {
                setSkillChestLoading(true);
                api = "/api/OpenChest/OpenSkillChest";
            } else return;

            axios
                .get(api, {
                    headers: { Authorization: `Bearer ${user.token}` },
                })
                .then(function (response) {
                    dispatch(addBalance(response.data.data.remainingBalance));
                    if (type === "skill") {
                        setModalData(response.data.data.obtainedSkills);
                    } else {
                        setModalData(response.data.data.obtainedWeapons);
                    }

                    document.getElementById("reward_modal").showModal();

                    // Remove the Skills and Weapons data in Redux so that it will refetch
                    dispatch(removeOwnedSkills());
                    dispatch(removeOwnedWeapons());
                })
                .catch(function (error) {
                    console.log(error);
                    toast.error(error.response.data.message);
                })
                .finally(() => {
                    type === "weapon"
                        ? setWeaponChestLoading(false)
                        : setSkillChestLoading(false);
                });
        }
    };

    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24">
            <div
                className="flex flex-col items-center tooltip"
                data-tip="Get 1 random Weapon"
            >
                <p className="font-bold text-2xl md:text-3xl md:mb-4 lg:text-4xl">
                    WEAPON CHEST
                </p>
                <img
                    src={"assets/chests/WeaponChest.png"}
                    className="w-48 h-40 md:w-56 md:h-48 lg:w-72 lg:h-60"
                />

                <button
                    className={`btn ${
                        weaponChestLoading ? "btn-disabled" : "btn-primary"
                    } w-fit mt-1 md:mt-3 lg:mt-5`}
                    onClick={() => openChest("weapon")}
                >
                    {weaponChestLoading ? (
                        <span className="loading loading-spinner"></span>
                    ) : (
                        <>
                            <RiMoneyDollarCircleFill size={"1.5rem"} />
                            <span className="font-bold text-lg">500</span>
                        </>
                    )}
                </button>
            </div>

            <div
                className="flex flex-col items-center tooltip"
                data-tip="Get 3 random Skills"
            >
                <p className="font-bold text-2xl md:text-3xl md:mb-4 lg:text-4xl">
                    SKILL CHEST
                </p>
                <img
                    src={"assets/chests/SkillChest.png"}
                    className="w-48 h-40 md:w-56 md:h-48 lg:w-72 lg:h-60"
                />
                <button
                    className={`btn ${
                        skillChestLoading ? "btn-disabled" : "btn-primary"
                    } w-fit mt-1 md:mt-3 lg:mt-5`}
                    onClick={() => openChest("skill")}
                >
                    {skillChestLoading ? (
                        <span className="loading loading-spinner"></span>
                    ) : (
                        <>
                            <RiMoneyDollarCircleFill size={"1.5rem"} />
                            <span className="font-bold text-lg">500</span>
                        </>
                    )}
                </button>
            </div>

            {/* Your balance is here lol */}
            <div className="bg-base-200 p-2 sm:p-4 flex gap-1 absolute top-0 right-0">
                <RiMoneyDollarCircleLine className="text-orange-400 text-[1.5em] sm:text-[2em]" />
                <p className="text-md sm:text-xl font-bold text-base">
                    {balance}
                </p>
            </div>

            <GetItemFromChestModal data={modalData} />
        </div>
    );
};

export default Shop;
