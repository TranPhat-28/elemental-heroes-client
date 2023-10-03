import BattleA from "../assets/gamesStartIcon/BattleA.png";
import BattleB from "../assets/gamesStartIcon/BattleB.png";

const Home = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-10">
            <div className="flex flex-col items-center cursor-pointer rounded-3xl p-4 md:p-6 bg-base-200 hover:shadow-2xl duration-75">
                <img src={BattleA} className="w-52 h-52 lg:w-80 lg:h-80" />
                <p className="font-bold text-3xl md:text-4xl">AI singleplayer</p>
            </div>

            <div className="flex flex-col items-center cursor-pointer rounded-3xl p-4 md:p-6 bg-base-200 hover:shadow-2xl duration-75">
                <img src={BattleB} className="w-52 h-52 lg:w-80 lg:h-80" />
                <p className="font-bold text-3xl md:text-4xl">Battle a friend</p>
            </div>
        </div>
    );
};

export default Home;
