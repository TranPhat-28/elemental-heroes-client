import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Image from "/android-chrome-192x192.png";
import { useForm } from "react-hook-form";
import { ObjectIsEmpty } from "../helpers/Object";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const RegisterPage = () => {
    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    // Navigate
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    // Get the value of the 'password' field for Validating
    const password = watch("password");

    // Form Submit
    const onSubmit = (data) => {
        setIsLoading(true);

        axios
            .post("/api/Auth/Register", data)
            .then(function (response) {
                toast.success(response.data.message);
                setIsLoading(false);
                navigate('/login');
            })
            .catch(function (error) {
                toast.error(error.response.data.message);
                setIsLoading(false);
            });
    };

    return (
        <div className="h-full w-full bg-base-300 flex items-center justify-center p-2">
            <div className="bg-base-100 flex flex-col items-center rounded-lg w-full max-w-xl p-4">
                <img src={Image} className="w-20 h-20" />

                <h1 className="font-bold mt-2">Welcome new player!</h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="form-control w-full max-w-xs flex flex-col"
                >
                    <label className="label">Email: </label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email address",
                            },
                        })}
                        type="text"
                        placeholder="example@email.com"
                        className="input input-bordered w-full max-w-xs"
                    />

                    <label className="label">Password: </label>
                    <input
                        {...register("password", {
                            required: "Password is required",
                        })}
                        type="password"
                        placeholder="***"
                        className="input input-bordered w-full max-w-xs"
                    />

                    <label className="label">Confirm password: </label>
                    <input
                        {...register("confirmPassword", {
                            required: "Password confirm is required",
                            validate: (value) =>
                                value === password || "Passwords do not match",
                        })}
                        type="password"
                        placeholder="***"
                        className="input input-bordered w-full max-w-xs"
                    />

                    {!ObjectIsEmpty(errors) && (
                        <span className="mt-1 text-red-600">
                            {Object.values(errors)[0].message}
                        </span>
                    )}

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

                    <div className="divider">Or register using</div>
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
                    to={"/login"}
                >
                    Already a member? Login now!
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
