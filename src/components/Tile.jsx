const Tile = ({ data, setModalData }) => {
    const ringColor =
        data.element == "Fire"
            ? "ring-fire"
            : data.element === "Water"
            ? "ring-water"
            : data.element === "Wind"
            ? "ring-wind"
            : data.element === "Earth"
            ? "ring-earth"
            : data.element === "Electric"
            ? "ring-electric"
            : "ring-black";

    return (
        <div
            className="avatar py-3 justify-self-center hover:opacity-70 cursor-pointer duration-100"
            onClick={() => {
                // Only show the modal if setModalData is passed (which means this cell has data)
                if (setModalData !== null) {
                    setModalData(data);
                    document.getElementById("info_modal").showModal();
                }
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
