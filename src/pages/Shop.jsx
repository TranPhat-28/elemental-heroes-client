import axios from "axios";
import { useState } from "react";
import {
    RiMoneyDollarCircleLine,
    RiMoneyDollarCircleFill,
} from "react-icons/ri";
import { useSelector } from "react-redux";
import GetItemFromChestModal from "../components/GetItemFromChestModal";

const Shop = () => {
    // Redux
    const user = useSelector((state) => state.userAuth.user);

    // Loading button
    const [weaponChestLoading, setWeaponChestLoading] = useState(false);
    const [skillChestLoading, setSkillChestLoading] = useState(false);

    // Data for the Modal
    const [modalData, setModalData] = useState(null);

    // Open Weapon Chest
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
                    setModalData(response.data.data);
                    document.getElementById("reward_modal").showModal();
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(() => {
                    type === "weapon" ? setWeaponChestLoading(false) : setSkillChestLoading(false);
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

            <div className="bg-base-200 p-4 flex gap-1 absolute top-0 right-0">
                <RiMoneyDollarCircleLine
                    size={"2em"}
                    className="text-orange-400"
                />
                <p className="text-xl font-bold">5000</p>
            </div>

            <GetItemFromChestModal data={modalData} />
        </div>
    );
};

export default Shop;
