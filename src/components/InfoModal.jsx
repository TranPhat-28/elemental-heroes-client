import { FaHammer, FaReact } from "react-icons/fa6";
import {
    PiArrowsInLineVerticalBold,
    PiArrowsOutLineVerticalBold,
} from "react-icons/pi";
import { GetElementImgPath } from "../helpers/Helpers";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { setHeroData } from "../redux/features/hero/heroSlice";

const InfoModal = ({ data }) => {
    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userAuth.user);

    // Button loading
    const [isLoading, setLoading] = useState(false);

    // Handle equip
    const handleEquip = () => {
        const type = data?.damage ? "Skill" : "Weapon";

        const url =
            type === "Weapon"
                ? "/api/Hero/EquipWeapon"
                : "For_Equipping_Skills";

        // Set Loading
        setLoading(true);

        // Equip weapon
        axios
            .put(
                url,
                {
                    weaponId: data.id,
                },
                {
                    headers: { Authorization: `Bearer ${user.token}` },
                }
            )
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
            })
            .finally(() => {
                setLoading(false);
                document.getElementById("info_modal").close();
            });
    };

    return (
        <dialog id="info_modal" className="modal">
            <div className="modal-box">
                <div className="w-full flex flex-row-reverse justify-between">
                    <img
                        src={data?.iconUrl}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg"
                    />
                    <h3 className="font-bold text-4xl">{data?.name}</h3>
                </div>

                <div className="w-full pt-2">
                    <table className="table">
                        <tbody>
                            <tr className="hover">
                                <th>Type</th>
                                <td>{data?.damage ? "Skill" : "Weapon"}</td>
                            </tr>

                            {data?.damage && (
                                <tr className="hover">
                                    <th>Damage</th>
                                    <td>{data.damage}</td>
                                </tr>
                            )}

                            <tr className="hover">
                                <th>{data?.element}</th>
                                <td>
                                    <img
                                        className="h-8 w-8"
                                        src={GetElementImgPath(data?.element)}
                                    />
                                </td>
                            </tr>

                            {data?.attackType && (
                                <tr className="hover">
                                    <th>{data.attackType}</th>
                                    <td>
                                        {data.attackType == "Melee" ? (
                                            <PiArrowsInLineVerticalBold className="h-8 w-8" />
                                        ) : (
                                            <PiArrowsOutLineVerticalBold className="h-8 w-8" />
                                        )}
                                    </td>
                                </tr>
                            )}

                            {data?.damageType && (
                                <tr className="hover">
                                    <th>{data.damageType}</th>
                                    <td>
                                        {data.damageType == "Physical" ? (
                                            <FaHammer className="h-8 w-8" />
                                        ) : (
                                            <FaReact className="h-8 w-8" />
                                        )}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="modal-action">
                    <button
                        className={`btn ${
                            isLoading ? "btn-disabled" : "btn-primary"
                        }`}
                        onClick={handleEquip}
                    >
                        {isLoading && (
                            <span className="loading loading-spinner"></span>
                        )}
                        Equip
                    </button>
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default InfoModal;
