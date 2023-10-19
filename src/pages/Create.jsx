import { useForm } from "react-hook-form";
import {
    GetHeroImgPath,
    GetHeroType,
    ObjectIsEmpty,
} from "../helpers/Helpers";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setHeroData } from "../redux/features/hero/heroSlice";
import { allowFeaturePagesAccess, denyCreatePageAccess } from "../redux/features/routing/routingSlice";

const Create = () => {

    // Navigate
    const navigate = useNavigate();

    // React hook form
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // Get the value of the 'hp', 'attack' and 'defense' field for Validating
    const hp = watch("hp");
    const attack = watch("attack");
    const defense = watch("defense");

    // Get attackType and defenseType to get the hero
    const attackType = watch("attackType");
    const damageType = watch("damageType");

    // Loading button
    const [isLoading, setIsLoading] = useState(false);

    // Redux
    const user = useSelector((state) => state.userAuth.user);
    const dispatch = useDispatch();

    // Submit form
    const onSubmit = (data) => {
        //console.log(data);
        setIsLoading(true);

        axios
            .post("/api/Hero", data, {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            // Successfully created a hero
            .then(function (response) {
                // Show the message
                toast.success(response.data.message);
                setIsLoading(false);

                // Set the heroData
                dispatch(
                    setHeroData({
                        status: true,
                        data: response.data.data,
                    })
                );

                // Allow FeaturePages but not CreatePage
                dispatch(allowFeaturePagesAccess());
                dispatch(denyCreatePageAccess());

                // Go back to home page
                navigate("/");
            })
            .catch(function (error) {
                toast.error(error.response.data.message);
                setIsLoading(false);
            });
    };

    return (
        <div className="h-full w-full bg-base-300 flex items-center justify-center">
            <form
                className="form-control w-full max-w-lg h-full flex flex-col p-2 justify-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <p className="font-bold text-3xl text-center">
                    Setup your hero
                </p>

                <img
                    src={GetHeroImgPath(GetHeroType(attackType, damageType))}
                    alt="Hero"
                    className="w-40 h-40 self-center"
                />

                <div className="w-full">
                    <select
                        className="select select-bordered w-1/2"
                        {...register("attackType", {
                            required: "Attack type is required",
                        })}
                    >
                        <option value={"Melee"}>Melee</option>
                        <option value={"Ranged"}>Ranged</option>
                    </select>

                    <select
                        className="select select-bordered w-1/2"
                        {...register("damageType", {
                            required: "Damage type is required",
                        })}
                    >
                        <option value={"Physical"}>Physical</option>
                        <option value={"Magic"}>Magic</option>
                    </select>
                </div>

                <select
                    className="select select-bordered w-full"
                    {...register("element", {
                        required: "Element is required",
                    })}
                >
                    <option>Fire</option>
                    <option>Water</option>
                    <option>Wind</option>
                    <option>Electric</option>
                    <option>Earth</option>
                </select>

                <div className="alert flex p-3">
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
                        Hero types and elements{" "}
                        <span className="font-bold">WILL NOT</span> make your
                        hero stronger or weaker. No type or element is stronger
                        than the other.
                    </span>
                </div>

                <input
                    type="text"
                    placeholder="Give your hero a name"
                    className="input input-bordered w-full"
                    {...register("name", {
                        required: "Name is required",
                    })}
                />

                <p className="font-bold">Hero stats</p>
                <input
                    type="number"
                    placeholder="HP"
                    className="input input-bordered w-full"
                    {...register("hp", {
                        required: "HP is required",
                        validate: (value) =>
                            Number(value) + Number(attack) + Number(defense) <=
                                100 || "Maximum 100 points is allowed",
                    })}
                />
                <div>
                    <input
                        type="number"
                        placeholder="Attack"
                        className="input input-bordered w-1/2"
                        {...register("attack", {
                            required: "Attack is required",
                            validate: (value) =>
                                Number(value) + Number(hp) + Number(defense) <=
                                    100 || "Maximum 100 points is allowed",
                        })}
                    />
                    <input
                        type="number"
                        placeholder="Defense"
                        className="input input-bordered w-1/2"
                        {...register("defense", {
                            required: "Defense is required",
                            validate: (value) =>
                                Number(value) + Number(attack) + Number(hp) <=
                                    100 || "Maximum 100 points is allowed",
                        })}
                    />
                </div>

                <div className="alert flex p-3">
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
                        Hero stats{" "}
                        <span className="font-bold">DIRECTLY AFFECT</span> your
                        hero. You have a total of{" "}
                        <span className="font-bold">100 POINTS</span>, so spend
                        wisely.
                    </span>
                </div>

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
                    Create hero
                </button>
            </form>
        </div>
    );
};

export default Create;
