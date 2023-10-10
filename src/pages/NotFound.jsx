import { PiSealQuestion } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    return(
        <div className="w-full h-full bg-base-300 flex flex-col items-center justify-center">
            <PiSealQuestion size={"10em"} />
            <p className="text-4xl font-bold p-8">Page not found</p>
            <button className="btn btn-primary btn-outline" onClick={() => navigate('/')}>Go home</button>
        </div>
    );
};

export default NotFound;
