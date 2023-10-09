import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Shop = () => {
    return(
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex flex-col items-center">
                <img src={"assets/chests/NormalChest.png"} className="w-48 h-48 md:w-56 md:h-56 lg:w-80 lg:h-80" />
                <button className="btn btn-primary w-fit">Open one for 500$</button>
            </div>

            <div className="flex flex-col items-center">
                <img src={"assets/chests/RareChest.png"} className="w-48 h-48 md:w-56 md:h-56 lg:w-80 lg:h-80"/>
                <button className="btn btn-primary w-fit">Open one for 1000$</button>
            </div>

            <div className="bg-base-200 p-4 flex gap-1 absolute top-0 right-0">
                <RiMoneyDollarCircleLine size={"2em"} className="text-orange-400" />
                <p className="text-xl font-bold">5000</p>
            </div>
        </div>
    );
};

export default Shop;