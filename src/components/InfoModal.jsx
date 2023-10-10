import { FaHammer, FaReact } from "react-icons/fa6";
import {
    PiArrowsInLineVerticalBold,
    PiArrowsOutLineVerticalBold,
} from "react-icons/pi";
import { GetElementImgPath } from "../helpers/Helpers";

const InfoModal = ({ data }) => {
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
                                <td>Skill</td>
                            </tr>

                            <tr className="hover">
                                <th>Damage</th>
                                <td>{data?.damage}</td>
                            </tr>

                            <tr className="hover">
                                <th>{data?.element}</th>
                                <td>
                                    <img
                                        className="h-8 w-8"
                                        src={GetElementImgPath(data?.element)}
                                    />
                                </td>
                            </tr>

                            <tr className="hover">
                                <th>{data?.attackType}</th>
                                <td>
                                    {data?.attackType == "Melee" ? (
                                        <PiArrowsInLineVerticalBold className="h-8 w-8" />
                                    ) : (
                                        <PiArrowsOutLineVerticalBold className="h-8 w-8" />
                                    )}
                                </td>
                            </tr>

                            <tr className="hover">
                                <th>{data?.damageType}</th>
                                <td>
                                    {data?.damageType == "Physical" ? (
                                        <FaHammer className="h-8 w-8" />
                                    ) : (
                                        <FaReact className="h-8 w-8" />
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default InfoModal;
