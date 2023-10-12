import Tile from "./Tile";

const LibraryList = ({ data, setModalData }) => {

    return (
        <div className="grid grid-cols-3 min-[450px]:grid-cols-4 md:grid-cols-3 xl:grid-cols-4">
            {data.map((item) => (
                <Tile key={item.id} data={item} setModalData={setModalData} />
            ))}
        </div>
    );
};

export default LibraryList;
