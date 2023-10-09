const Tile = ({ size, data }) => {
    //const ringColor = `ring-${data.element.toLowerCase()}`;
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
        <div className="avatar py-3 justify-self-center">
            <div
                className={`${
                    size == "large"
                        ? "w-20 h-20 sm:w-24 sm:h-24"
                        : "w-16 h-16 sm:w-20 sm:h-20"
                } rounded-lg ring ${ringColor} ring-offset-base-100 ring-offset-2`}
            >
                <img src={data.iconUrl} />
            </div>
        </div>
    );
};

export default Tile;
