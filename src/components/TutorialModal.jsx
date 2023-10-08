import { useNavigate } from "react-router-dom";

const TutorialModal = () => {

    const navigate = useNavigate();

    return (
        <dialog id="tutorial_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">REMINDER</h3>
                <p className="py-4">
                    Create your hero to start playing now!
                </p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn" onClick={() => navigate('/create')}>OK</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default TutorialModal;
