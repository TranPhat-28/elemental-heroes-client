const Tile = ({ data, setModalData }) => {
    const ringColor =
        data.element == "Fire"
            ? "ring-fire"
            : data.element == "Water"
            ? "ring-water"
            : data.element == "Wind"
            ? "ring-wind"
            : data.element == "Earth"
            ? "ring-earth"
            : "ring-electric";

    return (
        <div
            className="avatar py-3 justify-self-center hover:opacity-70 cursor-pointer duration-100"
            onClick={() => {
                document.getElementById("info_modal").showModal();
                setModalData(data);
            }}
        >
            <div
                className={`rounded-lg w-16 h-16 sm:w-20 sm:h-20 ring ${ringColor} ring ring-offset-base-100 ring-offset-2`}
            >
                <img src={data.iconUrl} />
            </div>
        </div>
    );
};

export default Tile;
