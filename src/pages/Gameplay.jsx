import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GetHeroImgPath, GetHeroType } from "../helpers/Helpers";
import GameResultModal from "../components/GameResultModal";

const Gameplay = () => {
    // Game data
    const { state } = useLocation();

    // Navigate
    const navigate = useNavigate();

    // Display HP:
    const [playerHp, setPlayerHp] = useState(state?.gameResult[0].playerInitHp);
    const [botHp, setBotHp] = useState(state?.gameResult[0].botInitHp);

    // Display attack animation
    const [playerAttack, setPlayerAttack] = useState(false);
    const [botAttack, setBotAttack] = useState(false);

    // Display Damage
    const [playerDmgDealt, setPlayerDmgDealt] = useState(null);
    const [botDmgDealt, setBotDmgDealt] = useState(null);

    // Gif URL to reset animation
    const [imgSrc, setImgSrc] = useState("");

    // Timing for animation
    async function GameAnimation() {
        for (const turn of state.gameResult) {
            // Initial waiting
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Show player attack animation
            setPlayerAttack(true);
            // Reset the gif animation
            setImgSrc("assets/animations/Slash.gif");

            // Hide player attack animation
            await new Promise((resolve) => setTimeout(resolve, 750));
            setPlayerAttack(false);
            // Reset the gif animation
            setImgSrc("");

            // Display health
            setPlayerDmgDealt(turn.playerDamageDealt);
            await new Promise((resolve) => setTimeout(resolve, 750));
            setBotHp(turn.botRemainingHp);
            setPlayerDmgDealt(null);

            // Show bot attack animation
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setBotAttack(true);
            // Reset the gif animation
            setImgSrc("assets/animations/Slash.gif");

            // Hide bot attack animation
            await new Promise((resolve) => setTimeout(resolve, 750));
            setBotAttack(false);
            // Reset the gif animation
            setImgSrc("");

            // Display health
            setBotDmgDealt(turn.botDamageDealt);
            await new Promise((resolve) => setTimeout(resolve, 750));
            setPlayerHp(turn.playerRemainingHp);
            setBotDmgDealt(null);
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
        document.getElementById("game_result_modal").showModal();
    }

    useEffect(() => {
        // Redirect if no game data found
        if (state === null) {
            navigate("/");
        }

        GameAnimation();
    }, []);

    return (
        <div className="w-full h-full relative flex flex-col lg:flex-row-reverse justify-center gap-2 p-2 bg-base-300">
            {/* Enemy */}
            {state && (
                <div
                    className={
                        "w-full lg:max-w-lg h-full flex flex-col items-center justify-center"
                    }
                >
                    <progress
                        className="progress progress-success w-56 h-4"
                        value={botHp}
                        max={state.gameResult[0].botInitHp}
                    ></progress>

                    <div className="h-52 w-52 lg:w-80 lg:h-80 relative rotate-180 lg:rotate-0 flex">
                        <img
                            src={GetHeroImgPath(
                                GetHeroType(
                                    state.botData.attackType,
                                    state.botData.damageType
                                )
                            )}
                            className={`h-full w-full ${
                                playerAttack
                                    ? "brightness-150 animate-shake"
                                    : "brightness-100"
                            }`}
                        />

                        <img
                            src={imgSrc}
                            className={`h-full w-full absolute top-0 left-0 ${
                                playerAttack ? "block" : "hidden"
                            }`}
                        />

                        <div className="absolute text-center text-6xl bottom-0 lg:top-0 left-1/2 -translate-x-1/2 rotate-180 lg:rotate-0 font-bungee-spice">
                            {playerDmgDealt}
                        </div>
                    </div>
                </div>
            )}

            {/* You */}
            {state && (
                <div
                    className={
                        "w-full lg:max-w-lg h-full flex flex-col-reverse lg:flex-col items-center justify-center"
                    }
                >
                    <progress
                        className="progress progress-success w-56 h-4"
                        value={playerHp}
                        max={state.gameResult[0].playerInitHp}
                    ></progress>

                    <div className="h-52 w-52 lg:w-80 lg:h-80 relative flex">
                        <img
                            src={GetHeroImgPath(
                                GetHeroType(
                                    state.userHeroData.attackType,
                                    state.userHeroData.damageType
                                )
                            )}
                            className={`h-full w-full ${
                                botAttack
                                    ? "brightness-150 animate-shake"
                                    : "brightness-100"
                            }`}
                        />

                        <img
                            src={imgSrc}
                            className={`h-full w-full hue-rotate-90 absolute top-0 left-0 ${
                                botAttack ? "block" : "hidden"
                            }`}
                        />

                        <div className="absolute text-center text-6xl bottom-0 lg:top-0 left-1/2 -translate-x-1/2 font-bungee-spice">
                            {botDmgDealt}
                        </div>
                    </div>
                </div>
            )}

            <GameResultModal
                isVictory={state?.playerVictory}
                turnCount={state?.gameResult.length}
                reward={state?.reward}
            />
        </div>
    );
};

export default Gameplay;
