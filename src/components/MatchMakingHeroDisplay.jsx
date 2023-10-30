import { GetHeroImgPath, GetHeroType } from "../helpers/Helpers";
import { PropagateLoader } from "react-spinners";

const MatchMakingHeroDisplay = ({ flexDirection, imgDirection, hero, isLoading }) => {
    return (
        <div
            className={`w-full lg:max-w-lg h-full flex ${flexDirection} items-center justify-center`}
        >
            {hero && (
                <>
                    <p className="border w-fit text-center text-4xl font-bold px-5">
                        {hero.name}
                    </p>
                    <span className="italic font-semibold">
                        CP:{" "}
                        {hero.hp +
                            hero.attack +
                            hero.defense +
                            hero.bonusHp +
                            hero.bonusAttack +
                            hero.bonusDefense}
                    </span>

                    <img
                        src={GetHeroImgPath(
                            GetHeroType(hero.attackType, hero.damageType)
                        )}
                        className={`h-52 w-52 lg:w-80 lg:h-80 ${imgDirection} self-center`}
                    />
                </>
            )}

            {isLoading && <PropagateLoader />}
        </div>
    );
};

export default MatchMakingHeroDisplay;
