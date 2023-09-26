import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
    return(
        <div className="h-full w-full bg-base-300 flex items-center justify-center p-2">
            <div className="bg-base-100 flex flex-col items-center rounded-lg w-full max-w-xl p-4">

                <h1 className="font-bold mt-2">Forgot your password?</h1>

                <form className="form-control w-full max-w-xs flex flex-col">
                    <input
                        type="text"
                        placeholder="Input your email here"
                        className="input input-bordered w-full max-w-xs"
                    />

                    <button className="btn btn-primary w-full my-4">
                        Reset password
                    </button>
                </form>

                <Link
                    className="mt-4 cursor-pointer hover:font-bold w-fit"
                    to={"/login"}
                >
                    Back to the login page
                </Link>
            </div>
        </div>
    );
};

export default ResetPasswordPage;