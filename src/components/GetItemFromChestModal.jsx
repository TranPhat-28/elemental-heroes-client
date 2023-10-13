import Tile from "./Tile";

const GetItemFromChestModal = ({ data }) => {
    return (
        <dialog id="reward_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-4xl text-center">YOU GOT!!</h3>

                <div
                    className={`w-full flex ${
                        data.length === 1 ? "justify-center" : "justify-between"
                    } p-4`}
                >
                    {data &&
                        data.map((item) => <Tile key={item.id} data={item} />)}
                </div>

                <div className="modal-action mt-0 flex justify-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default GetItemFromChestModal;
