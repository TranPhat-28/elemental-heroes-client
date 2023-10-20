import axios from "axios";
import { toast } from "react-toastify";
import { setHeroData } from "../redux/features/hero/heroSlice";
import { useDispatch, useSelector } from "react-redux";
import { ObjectIsEmpty } from "../helpers/Helpers";

const FormationTile = ({ data, type }) => {
    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userAuth.user);

    // Remove equipment
    const removeEquip = () => {
        // If there is an equipment in the slot
        if (!ObjectIsEmpty(data)) {
            const url =
                type === "weapon"
                    ? "/api/Hero/RemoveWeapon"
                    : "For_Unequipping_Skills";
            // Unequip
            axios
                .put(url, null, {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                })
                .then(function (response) {
                    toast.success(response.data.message);

                    // Set new weapon to the Redux hero data
                    dispatch(
                        setHeroData({
                            status: true,
                            data: response.data.data,
                        })
                    );
                })
                .catch(function (error) {
                    toast.error(error.message);
                    console.log(error);
                });
        }
    };

    // Ring color, black if not equipped
    const ringColor =
        data.element == "Fire"
            ? "ring-fire"
            : data.element == "Water"
            ? "ring-water"
            : data.element == "Wind"
            ? "ring-wind"
            : data.element == "Earth"
            ? "ring-earth"
            : data.element == "Electric"
            ? "ring-electric"
            : "ring-black";

    // Icon src
    const iconUrl = data.iconUrl
        ? data.iconUrl
        : type === "weapon"
        ? "https://res.cloudinary.com/dxyzeg3rg/image/upload/v1696923712/MyGameAssets/skills/EmptyWeapon_eryudu.png"
        : type === "skill"
        ? "https://res.cloudinary.com/dxyzeg3rg/image/upload/v1696918256/MyGameAssets/skills/EmptySkill_hqb6c6.png"
        : "";

    return (
        <div
            className="avatar py-3 justify-self-center hover:opacity-70 cursor-pointer duration-100"
            onClick={removeEquip}
        >
            <div
                className={`${
                    type === "weapon"
                        ? "w-[5.5rem] h-[5.5rem] sm:w-28 sm:h-28"
                        : "w-16 h-16 sm:w-20 sm:h-20"
                } rounded-lg ring ${ringColor} ring ring-offset-base-100 ring-offset-2`}
            >
                <img src={iconUrl} />
            </div>
        </div>
    );
};

export default FormationTile;
