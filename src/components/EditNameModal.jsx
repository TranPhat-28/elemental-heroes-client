import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const EditNameModal = ({ heroInfo, setHeroInfo }) => {
    // Data
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Redux
    const user = useSelector((state) => state.userAuth.user);

    // Handle submit
    const handleSubmit = () => {
        if (name == "") {
            document.getElementById("change_name_modal").close();
        } else {
            setIsLoading(true);

            axios
                .put(
                    "/api/Hero",
                    {
                        name: name,
                    },
                    {
                        headers: { Authorization: `Bearer ${user.token}` },
                    }
                )
                .then(function (response) {
                    setIsLoading(false);
                    toast.success("Hero name changed successfully");
                    document.getElementById("change_name_modal").close();

                    // console.log(response);
                    const tmp = heroInfo;
                    tmp.name = name;
                    setHeroInfo(tmp);

                    // console.log(heroInfo);
                })
                .catch(function (error) {
                    toast.error("Something went wrong");
                    console.log(error);
                    setIsLoading(false);
                    document.getElementById("change_name_modal").close();
                });
        }
    };

    return (
        <dialog id="change_name_modal" className="modal">
            <div className="modal-box flex flex-col">
                <h3 className="font-bold text-lg">CHANGE YOU HERO NAME</h3>
                <input
                    type="text"
                    placeholder="New name"
                    className="input input-bordered w-full my-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button
                    className={`btn ${
                        isLoading ? "btn-disabled" : "btn-primary"
                    } w-full mt-4`}
                    onClick={handleSubmit}
                >
                    {isLoading && (
                        <span className="loading loading-spinner"></span>
                    )}
                    Save change
                </button>
            </div>
        </dialog>
    );
};

export default EditNameModal;
