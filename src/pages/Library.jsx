import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import LibraryList from "../components/LibraryList";
import useLogout from "../hooks/Users";
import InfoModal from "../components/InfoModal";

const Library = () => {
    // The information modal should be here
    const [modalData, setModalData] = useState(null);

    // Logout
    const logout = useLogout();

    // Data
    const [skillList, setSkillList] = useState(null);
    const [weaponList, setWeaponList] = useState(null);

    // Loading
    const [skillLoading, setSkillLoading] = useState(true);
    const [weaponLoading, setWeaponLoading] = useState(true);

    // User token
    const user = useSelector((state) => state.userAuth.user);

    // Load data
    useEffect(() => {
        const SkillPromise = axios.get("/api/Skill", {
            headers: { Authorization: `Bearer ${user.token}` },
        });

        const WeaponPromise = axios.get("/api/Weapon", {
            headers: { Authorization: `Bearer ${user.token}` },
        });

        // Perform fetching both at the same time
        Promise.all([SkillPromise, WeaponPromise])
            .then((response) => {
                //Load skill
                setSkillList(response[0].data.data);
                setSkillLoading(false);

                // Load weapon
                setWeaponList(response[1].data.data);
                setWeaponLoading(false);
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
            });
    }, []);

    return (
        <div className="w-full h-full p-4 overflow-y-scroll">
            <div className="w-full h-full flex flex-col md:flex-row md:justify-around items-center md:items-start">
                <div className="w-full max-w-[380px] sm:max-w-[440px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[500px]">
                    <h1 className="font-bold my-2">Weapons</h1>
                    {weaponLoading && <BeatLoader />}
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
                    {skillLoading && <BeatLoader />}
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
