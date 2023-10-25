import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import InfoModal from "../components/InfoModal";
import LibraryList from "../components/LibraryList";
import useLogout from "../hooks/Users";
import {
    addOwnedSkills,
    addOwnedWeapons,
} from "../redux/features/userData/userDataSlice";

const Library = () => {
    // The information modal should be here
    const [modalData, setModalData] = useState(null);

    // Logout
    const logout = useLogout();

    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userAuth.user);
    const skillList = useSelector((state) => state.userData.ownedSkills);
    const weaponList = useSelector((state) => state.userData.ownedWeapons);

    // Load data
    useEffect(() => {
        // Only load if no data is presented
        if (!skillList && !weaponList) {
            // Show the loading modal
            document.getElementById("loading_modal").showModal();

            // Fetch skills
            const SkillPromise = axios.get("/api/Skill", {
                headers: { Authorization: `Bearer ${user.token}` },
            });

            // Fetch waepons
            const WeaponPromise = axios.get("/api/Weapon", {
                headers: { Authorization: `Bearer ${user.token}` },
            });

            // Perform fetching both at the same time
            Promise.all([SkillPromise, WeaponPromise])
                .then((response) => {
                    // Set Skills and Weapons data
                    dispatch(addOwnedSkills(response[0].data.data));
                    dispatch(addOwnedWeapons(response[1].data.data));
                })
                .catch(function (error) {
                    console.log(error);
                    if (error.response.status == 401) {
                        toast.error("Cannot authenticate, please login again");
                        logout();

                        console.log(error.response);
                    } else {
                        toast.error("Something went wrong");
                        console.log(error);
                    }
                })
                .finally(() => {
                    // Close the loading modal
                    document.getElementById("loading_modal").close();
                });
        }
    }, []);

    return (
        <div className="w-full h-full p-4 overflow-y-scroll">
            <div className="w-full h-full flex flex-col md:flex-row md:justify-around items-center md:items-start">
                <div className="w-full max-w-[380px] sm:max-w-[440px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[500px]">
                    <h1 className="font-bold my-2">Weapons</h1>
                    <div className="w-full p-2">
                        <div className="alert flex p-3 md:h-20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="stroke-info shrink-0 w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span className="text-left text-[0.8rem] italic">
                                Weapons with matching{" "}
                                <span className="font-bold">ELEMENT</span> give
                                a bonus of{" "}
                                <span className="font-bold">40 HP</span> and{" "}
                                <span className="font-bold">20 DEFENSE.</span>
                            </span>
                        </div>
                    </div>
                    {weaponList && (
                        <LibraryList
                            data={weaponList.weapons}
                            totalCount={weaponList.totalWeaponCount}
                            setModalData={setModalData}
                        />
                    )}
                </div>

                <div className="w-full max-w-[380px] sm:max-w-[440px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[500px]">
                    <h1 className="font-bold my-2">Skills</h1>
                    <div className="w-full p-2">
                        <div className="alert flex p-3 md:h-20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="stroke-info shrink-0 w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span className="text-left text-[0.8rem] italic">
                                Skills with matching{" "}
                                <span className="font-bold">ELEMENT</span> give
                                a bonus of{" "}
                                <span className="font-bold">10 ATTACK</span>.
                                Matching{" "}
                                <span className="font-bold">ATTACK TYPE</span>{" "}
                                and{" "}
                                <span className="font-bold">DAMAGE TYPE</span>{" "}
                                will give another{" "}
                                <span className="font-bold">5 ATTACK</span>bonus
                                for each match.
                            </span>
                        </div>
                    </div>
                    {skillList && (
                        <LibraryList
                            data={skillList.skills}
                            totalCount={skillList.totalSkillCount}
                            setModalData={setModalData}
                        />
                    )}
                </div>
            </div>

            <InfoModal data={modalData} />
        </div>
    );
};

export default Library;
