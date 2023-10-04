import Tile from "../components/Tile";
import Hero from "../assets/heroes/Knight.png";
import Stat from "../components/Stat";
import { GiMedicalPack } from "react-icons/gi";
import { PiSwordBold, PiArrowsInLineVerticalBold, PiArrowsOutLineVerticalBold } from "react-icons/pi";
import { FaShieldHalved, FaHammer, FaReact } from "react-icons/fa6";
import Fire from "../assets/elements/fire.png";

const Formation = () => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-full max-w-lg h-full md:max-w-4xl flex flex-col md:flex-row p-2">
                <div className="border border-red-500 h-2/3 md:h-full w-full md:w-2/3 flex flex-col justify-center items-center">
                    <p className="font-bold text-2xl">Heroname</p>
                    <img src={Hero} className="h-52 w-52 md:w-72 md:h-72 lg:w-80 lg:h-80 self-center" />
                    {/* Weapon and skills container */}
                    <div className="flex border border-blue-500 gap-5 sm:gap-8 justify-center">
                        <Tile />
                        <Tile />
                        <Tile />
                        <Tile />
                    </div>
                </div>
                <div className="border border-red-500 h-1/3 md:h-full w-full md:w-1/3 p-2">
                    <div className="h-full w-full grid gap-2 grid-cols-2 md:grid-cols-1">
                        <Stat icon={<GiMedicalPack className="text-4xl" />} value={"800 + 00"} />
                        <Stat icon={<img className="h-9 w-9" src={Fire} />} value={"Fire"} />
                        <Stat icon={<PiSwordBold className="text-4xl" />} value={"800 + 00"} />
                        <Stat icon={<PiArrowsInLineVerticalBold className="text-4xl" />} value={"Melee"} />
                        <Stat icon={<FaShieldHalved className="text-4xl" />} value={"800 + 00"} />
                        <Stat icon={<FaReact className="text-4xl" />} value={"Magic"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Formation;
