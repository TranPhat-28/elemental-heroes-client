// Components
import Stat from "../components/Stat";

// Icons
import { AiOutlineEdit } from "react-icons/ai";
import { FaHammer, FaReact, FaShieldHalved } from "react-icons/fa6";
import { GiMedicalPack } from "react-icons/gi";
import {
    PiArrowsInLineVerticalBold,
    PiArrowsOutLineVerticalBold,
    PiSwordBold,
} from "react-icons/pi";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import EditNameModal from "../components/EditNameModal";
import FormationTile from "../components/FormationTile";
import {
    GetElementImgPath,
    GetHeroImgPath,
    GetHeroType,
} from "../helpers/Helpers";

const Formation = () => {
    // Redux
    // const dispatch = useDispatch();
    const hero = useSelector((state) => state.heroData.hero.data);

    return (
        <div className="w-full h-full flex justify-center">
            {hero && (
                <div className="w-full max-w-lg h-full md:max-w-4xl flex flex-col md:flex-row p-2">
                    <div className="h-2/3 md:h-full w-full md:w-2/3 flex flex-col justify-center items-center">
                        <div className="w-full flex justify-center">
                            <p className="border w-fit text-center text-4xl font-bold px-5">
                                {hero.name}
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
                                GetHeroType(hero.attackType, hero.damageType)
                            )}
                            className="h-52 w-52 md:w-72 md:h-72 lg:w-80 lg:h-80 self-center"
                        />
                        {/* Weapon and skills container */}
                        <div className="flex gap-5 sm:gap-8 justify-center items-center">
                            <FormationTile data={hero.weapon ? hero.weapon : {}} type={"weapon"}/>
                            <FormationTile data={{}} type={"skill"}/>
                            <FormationTile data={{}} type={"skill"}/>
                            <FormationTile data={{}} type={"skill"}/>
                        </div>
                    </div>
                    <div className="h-1/3 md:h-full lg:flex lg:items-center w-full md:w-1/3 p-2">
                        <div className="h-full lg:h-3/4 w-full grid gap-2 grid-cols-2 md:grid-cols-1">
                            <Stat
                                icon={<GiMedicalPack className="text-4xl" />}
                                value={`${hero.hp} + 0`}
                            />
                            <Stat
                                icon={
                                    <img
                                        className="h-9 w-9"
                                        src={GetElementImgPath(hero.element)}
                                    />
                                }
                                value={hero.element}
                            />
                            <Stat
                                position={"md:row-start-2"}
                                icon={<PiSwordBold className="text-4xl" />}
                                value={`${hero.attack} + 0`}
                            />
                            <Stat
                                icon={
                                    hero.attackType == "Melee" ? (
                                        <PiArrowsInLineVerticalBold className="text-4xl" />
                                    ) : (
                                        <PiArrowsOutLineVerticalBold className="text-4xl" />
                                    )
                                }
                                value={hero.attackType}
                            />
                            <Stat
                                position={"md:row-start-3"}
                                icon={<FaShieldHalved className="text-4xl" />}
                                value={`${hero.defense} + 0`}
                            />
                            <Stat
                                icon={
                                    hero.damageType == "Physical" ? (
                                        <FaHammer className="text-4xl" />
                                    ) : (
                                        <FaReact className="text-4xl" />
                                    )
                                }
                                value={hero.damageType}
                            />
                        </div>
                    </div>
                </div>
            )}

            {!hero && <Navigate to={"/"} />}

            <EditNameModal />
        </div>
    );
};

export default Formation;
