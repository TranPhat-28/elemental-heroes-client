import ChestA from "../assets/chests/NormalChest.png";
import ChestB from "../assets/chests/RareChest.png";

const Shop = () => {
    return(
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex flex-col items-center">
                <img src={ChestA} className="w-48 h-48 md:w-56 md:h-56 lg:w-80 lg:h-80" />
                <button className="btn btn-primary w-fit">Open one for 500$</button>
            </div>

            <div className="flex flex-col items-center">
                <img src={ChestB} className="w-48 h-48 md:w-56 md:h-56 lg:w-80 lg:h-80"/>
                <button className="btn btn-primary w-fit">Open one for 1000$</button>
            </div>
        </div>
    );
};

export default Shop;