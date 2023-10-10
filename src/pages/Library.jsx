import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import LibraryList from "../components/LibraryList";
import useLogout from "../hooks/Users";

const Library = () => {
    // Logout
    const logout = useLogout();

    // Data
    const [skillList, setSkillList] = useState(null);
    const [weaponList, setWeaponList] = useState(null);

    // Mock weapon data
    const mockWeaponList = [
        {
            id: 1,
            name: "A",
            iconUrl: "https://picsum.photos/200",
            element: "Fire",
        },
        {
            id: 2,
            name: "B",
            iconUrl: "https://picsum.photos/200",
            element: "Water",
        },
        {
            id: 3,
            name: "C",
            iconUrl: "https://picsum.photos/200",
            element: "Wind",
        },
        {
            id: 4,
            name: "D",
            iconUrl: "https://picsum.photos/200",
            element: "Electric",
        },
        {
            id: 5,
            name: "E",
            iconUrl: "https://picsum.photos/200",
            element: "Earth",
        },
    ];

    // Loading
    const [skillLoading, setSkillLoading] = useState(true);
    const [weaponLoading, setWeaponLoading] = useState(true);

    // User token
    const user = useSelector((state) => state.userAuth.user);

    // Load data
    useEffect(() => {
        axios
            .get("/api/Skill", {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then(function (response) {
                // Load skill
                setSkillList(response.data.data);
                setSkillLoading(false);

                // Load weapon
                setWeaponList(mockWeaponList);
                setWeaponLoading(false);
            })
            .catch(function (error) {
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
                    {/* { weaponLoading && <BeatLoader /> }
                    { weaponList && <LibraryList data={weaponList} /> } */}
                </div>

                <div className="w-full max-w-[380px] sm:max-w-[440px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[500px]">
                    <h1 className="font-bold my-2">Skills</h1>
                    { skillLoading && <BeatLoader /> }
                    { skillList && <LibraryList data={skillList} type={"skill"} /> }
                </div>
            </div>
        </div>
    );
};

export default Library;
