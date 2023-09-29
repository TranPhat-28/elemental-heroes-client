import Tile from "./Tile";

const LibraryList = ({ data }) => {
    return (
        <div>
            {data.map((item) => (
                <Tile key={item}/>
            ))}
        </div>
    );
};

export default LibraryList;
