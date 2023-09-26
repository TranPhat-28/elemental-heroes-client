import {
    PiBookBookmarkBold,
    PiCirclesThreeBold,
    PiGearSixBold,
    PiHouseBold,
    PiShoppingBagBold,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
    return (
        <div className="bg-base-200 flex justify-center">
            <div className="flex lg:flex-col w-full max-w-lg justify-center [&_.active]:bg-base-300 lg:p-2 lg:justify-start lg:gap-1">
                <NavLink to={"/"} className="lg:rounded-xl">
                    <button className="btn btn-square btn-lg bg-transparent lg:rounded-xl">
                        <PiHouseBold size={"2em"} />
                    </button>
                </NavLink>

                <NavLink to={"/formation"} className="lg:rounded-xl">
                    <button className="btn btn-square btn-lg bg-transparent lg:rounded-xl">
                        <PiCirclesThreeBold size={"2em"} />
                    </button>
                </NavLink>

                <NavLink to={"/library"} className="lg:rounded-xl">
                    <button className="btn btn-square btn-lg bg-transparent lg:rounded-xl">
                        <PiBookBookmarkBold size={"2em"} />
                    </button>
                </NavLink>

                <NavLink to={"/shop"} className="lg:rounded-xl">
                    <button className="btn btn-square btn-lg bg-transparent lg:rounded-xl">
                        <PiShoppingBagBold size={"2em"} />
                    </button>
                </NavLink>

                <NavLink to={"/settings"} className="lg:rounded-xl">
                    <button className="btn btn-square btn-lg bg-transparent lg:rounded-xl">
                        <PiGearSixBold size={"2em"} />
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default CustomNavbar;

//<div className="bg-base-200 flex lg:flex-col justify-between sm:justify-center sm:gap-20 [&_.active]:bg-base-300">
