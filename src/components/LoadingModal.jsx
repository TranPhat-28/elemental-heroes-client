import { RingLoader } from "react-spinners";

const LoadingModal = () => {
    return (
        <dialog id="loading_modal" className="modal">
            <div className="modal-box flex flex-col items-center">
                <p className="font-bold text-2xl p-2">Loading data</p>
                <RingLoader />
            </div>
        </dialog>
    );
};

export default LoadingModal;
