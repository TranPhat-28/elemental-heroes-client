import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "/android-chrome-192x192.png";

const LoginPage = () => {

    return (
        <div className="h-full w-full bg-base-300 flex items-center justify-center p-2">
            <div className="bg-base-100 flex flex-col items-center rounded-lg w-full max-w-xl p-4">

                <img src={Image} className="w-20 h-20" />

                <h1 className="font-bold mt-2">Login to continue</h1>

                <form className="form-control w-full max-w-xs flex flex-col">
                    <label className="label">Email: </label>
                    <input
                        type="text"
                        placeholder="example@email.com"
                        className="input input-bordered w-full max-w-xs"
                    />

                    <label className="label">Password: </label>
                    <input
                        type="password"
                        placeholder="***"
                        className="input input-bordered w-full max-w-xs"
                    />

                    <Link
                        className="mt-2 cursor-pointer hover:font-bold w-fit"
                        to={"/resetpassword"}
                    >
                        Forgot password?
                    </Link>

                    <button className="btn btn-primary w-full my-4">
                        Login
                    </button>

                    <div className="divider">Or login using</div>
                </form>

                <div className="flex gap-2">
                    <button className="btn btn-circle btn-outline hover:border-red-600 hover:bg-red-600">
                        <FaGoogle />
                    </button>
                    <button className="btn btn-circle btn-outline hover:border-blue-600 hover:bg-blue-600">
                        <FaFacebookF />
                    </button>
                </div>

                <Link
                    className="mt-4 cursor-pointer hover:font-bold w-fit"
                    to={"/register"}
                >
                    Not a member yet? Register now
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
