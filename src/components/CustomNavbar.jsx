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
                <NavLink to={"/"} className="lg:rounded-xl lg:w-24 lg:h-24">
                    <button className="btn btn-square btn-lg bg-transparent lg:rounded-xl lg:w-24 lg:h-24">
                        <PiHouseBold className="text-4xl lg:text-6xl" />
                    </button>
                </NavLink>

                <NavLink to={"/formation"} className="lg:rounded-xl">
                    <button className="btn btn-square btn-lg bg-transparent lg:rounded-xl lg:w-24 lg:h-24">
                        <PiCirclesThreeBold className="text-4xl lg:text-6xl" />
                    </button>
                </NavLink>

                <NavLink to={"/library"} className="lg:rounded-xl">
                    <button className="btn btn-square btn-lg bg-transparent lg:rounded-xl lg:w-24 lg:h-24">
                        <PiBookBookmarkBold className="text-4xl lg:text-6xl" />
                    </button>
                </NavLink>

                <NavLink to={"/shop"} className="lg:rounded-xl">
                    <button className="btn btn-square btn-lg bg-transparent lg:rounded-xl lg:w-24 lg:h-24">
                        <PiShoppingBagBold className="text-4xl lg:text-6xl" />
                    </button>
                </NavLink>

                <NavLink to={"/settings"} className="lg:rounded-xl">
                    <button className="btn btn-square btn-lg bg-transparent lg:rounded-xl lg:w-24 lg:h-24">
                        <PiGearSixBold className="text-4xl lg:text-6xl" />
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default CustomNavbar;

//<div className="bg-base-200 flex lg:flex-col justify-between sm:justify-center sm:gap-20 [&_.active]:bg-base-300">
