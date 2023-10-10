const FormationTile = ({ data, type }) => {
    // Ring color, black if not equipped
    const ringColor =
        data.element == "Fire"
            ? "ring-fire"
            : data.element == "Water"
            ? "ring-water"
            : data.element == "Wind"
            ? "ring-wind"
            : data.element == "Earth"
            ? "ring-earth"
            : data.element == "Electric"
            ? "ring-electric"
            : "ring-black";

    // Icon src
    const iconUrl = data.iconUrl
        ? data.iconUrl
        : type === "weapon"
        ? "https://res.cloudinary.com/dxyzeg3rg/image/upload/v1696923712/MyGameAssets/skills/EmptyWeapon_eryudu.png"
        : type === "skill"
        ? "https://res.cloudinary.com/dxyzeg3rg/image/upload/v1696918256/MyGameAssets/skills/EmptySkill_hqb6c6.png"
        : "";

    return (
        <div className="avatar py-3 justify-self-center hover:opacity-70 cursor-pointer duration-100">
            <div
                className={`${
                    type === "weapon"
                        ? "w-[5.5rem] h-[5.5rem] sm:w-28 sm:h-28"
                        : "w-16 h-16 sm:w-20 sm:h-20"
                } rounded-lg ring ${ringColor} ring ring-offset-base-100 ring-offset-2`}
            >
                <img src={iconUrl} />
            </div>
        </div>
    );
};

export default FormationTile;
