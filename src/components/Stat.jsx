const Stat = ({ icon, value, position }) => {
    return(
        <div className={`bg-base-100 rounded-md px-4 flex items-center gap-2 ${position}`}>
            {icon}
            <div className="flex flex-col font-bold text-lg">
                {value}
            </div>
        </div>
    );
};

export default Stat;