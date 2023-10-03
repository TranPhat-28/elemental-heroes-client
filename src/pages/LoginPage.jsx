import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Image from "/android-chrome-192x192.png";
import { ObjectIsEmpty } from "../helpers/Object";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAuth } from "../redux/features/auth/authSlice";

const LoginPage = () => {
    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    // Handle on submit
    const onSubmit = (data) => {
        setIsLoading(true);

        axios
            .post("/api/Auth/Login", data)
            .then(function (response) {
                toast.success(response.data.message);
                setIsLoading(false);

                // The user
                const user = {
                    email: data.email,
                    token: response.data.data,
                };

                dispatch(addUserAuth(user));
                localStorage.setItem("ElementalHeroesUser", JSON.stringify(user));
            })
            .catch(function (error) {
                toast.error(error.response.data.message);
                setIsLoading(false);
            });
    };

    // Loading
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="h-full w-full bg-base-300 flex items-center justify-center p-2">
            <div className="bg-base-100 flex flex-col items-center rounded-lg w-full max-w-xl p-4">
                <img src={Image} className="w-20 h-20" />

                <h1 className="font-bold mt-2">Login to continue</h1>

                <form
                    className="form-control w-full max-w-xs flex flex-col"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label className="label">Email: </label>
                    <input
                        {...register("email")}
                        type="text"
                        placeholder="example@email.com"
                        className="input input-bordered w-full max-w-xs"
                    />

                    <label className="label">Password: </label>
                    <input
                        {...register("password")}
                        type="password"
                        placeholder="***"
                        className="input input-bordered w-full max-w-xs"
                    />

                    {!ObjectIsEmpty(errors) && (
                        <span className="mt-1 text-red-600">
                            {Object.values(errors)[0].message}
                        </span>
                    )}

                    <Link
                        className="mt-2 cursor-pointer hover:font-bold w-fit"
                        to={"/resetpassword"}
                    >
                        Forgot password?
                    </Link>

                    <button
                        className={`btn ${
                            isLoading ? "btn-disabled" : "btn-primary"
                        } w-full mt-4`}
                    >
                        {isLoading && (
                            <span className="loading loading-spinner"></span>
                        )}
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
