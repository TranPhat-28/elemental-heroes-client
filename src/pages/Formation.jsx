import Tile from "../components/Tile";
import Hero from "../assets/heroes/Knight.png";

const Formation = () => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-full max-w-lg h-full md:max-w-4xl flex flex-col md:flex-row p-2">
                <div className="border border-red-500 h-2/3 md:h-full w-full md:w-2/3 flex flex-col justify-center items-center">
                    <p className="font-bold text-2xl">Heroname</p>
                    <img src={Hero} className="h-52 w-52 self-center"/>
                    {/* Weapon and skills container */}
                    <div className="flex border border-blue-500 gap-5 sm:gap-8 justify-center">
                        <Tile />
                        <Tile />
                        <Tile />
                        <Tile />
                    </div>
                </div>
                <div className="border border-red-500 h-1/3 md:h-full w-full md:w-1/3">
                    Stats go here
                </div>
            </div>
        </div>
    );
};

export default Formation;
