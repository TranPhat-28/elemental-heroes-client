import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBalance } from "../redux/features/userData/userDataSlice";

const GameResultModal = ({ isVictory, turnCount, reward }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Return home
    const GameFinish = () => {
        // To reload shop balance
        dispatch(addBalance(null));
        // Go home
        navigate("/")
    }

    return (
        <dialog id="game_result_modal" className="modal">
            <div className="modal-box flex flex-col items-center">
                <img
                    src={
                        (isVictory === true)
                            ? "assets/icons/Victory.png"
                            : "assets/icons/Defeat.png"
                    }
                />
                <p className="font-bold text-2xl p-2">
                    Game finished in {turnCount} turns.
                </p>

                <div className="my-2">
                    <p className="text-lg">Reward</p>
                    <div className="flex gap-1">
                        <p className="text-md sm:text-xl font-bold text-base">
                            {reward}
                        </p>
                        <RiMoneyDollarCircleLine className="text-orange-400 text-[1.5em] sm:text-[2em]" />
                    </div>
                </div>

                <button
                    className="btn btn-primary"
                    onClick={GameFinish}
                >
                    Go home
                </button>
            </div>
        </dialog>
    );
};

export default GameResultModal;
