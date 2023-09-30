import { useDispatch, useSelector } from "react-redux";
import { removeUserAuth } from "../redux/features/auth/authSlice";

const Settings = () => {
    // Read the user
    const user = useSelector((state) => state.userAuth.user);
    const dispatch = useDispatch();

    // Logout function
    const logout = () => {
        dispatch(removeUserAuth());
        localStorage.removeItem("BattleshipUser");
    }

    return (
        <div className="h-full w-full flex flex-col items-center">
            <div className="h-full w-full max-w-lg lg:max-w-4xl flex flex-col lg:flex-row lg:gap-28 items-center justify-center">
                <div className="avatar lg:-translate-y-40">
                    <div className="w-40 sm:w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://picsum.photos/200" />
                    </div>
                </div>

                <div className="text-center lg:-translate-y-36">
                    <h1 className="font-bold">{user}</h1>

                    <div className="overflow-x-auto my-4">
                        <table className="table table-sm lg:table-md">
                            <tbody>
                                <tr className="hover">
                                    <th>Member since:</th>
                                    <td>dd/mm/yyyy</td>
                                </tr>
                            
                                <tr className="hover">
                                    <th>Game played:</th>
                                    <td>0000</td>
                                </tr>

                                <tr className="hover">
                                    <th>Victories:</th>
                                    <td>0000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button className="btn btn-outline btn-primary" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
