const Tile = ({size}) => {
    return (
        <div className="avatar py-3 justify-self-center">
            <div className={`${size == "large" ? "w-20 h-20 sm:w-24 sm:h-24" : "w-16 h-16 sm:w-20 sm:h-20"} rounded-lg ring ring-primary ring-offset-base-100 ring-offset-2`}>
                <img src="https://picsum.photos/200"/>
            </div>
        </div>
    );
};

export default Tile;
