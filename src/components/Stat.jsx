const Stat = ({ icon, value, bonus, position }) => {
    return (
        <div
            className={`bg-base-100 rounded-md px-4 flex items-center gap-2 ${position}`}
        >
            {icon}
            <div className="flex font-bold text-lg">
                {value}
                {bonus !== undefined && bonus !== 0 && (
                    <span className="text-green-500 ml-1">+ {bonus}</span>
                )}
            </div>
        </div>
    );
};

export default Stat;
