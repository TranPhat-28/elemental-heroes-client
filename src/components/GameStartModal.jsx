import { HashLoader } from "react-spinners";

const GameStartModal = () => {
    return (
        <dialog id="game_start_modal" className="modal">
            <div className="modal-box flex flex-col items-center">
                <p className="font-bold text-2xl p-2">Game starting now</p>
                <HashLoader />
            </div>
        </dialog>
    );
};

export default GameStartModal;