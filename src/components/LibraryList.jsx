import Tile from "./Tile";

const LibraryList = ({ data, totalCount, setModalData }) => {

    // Generate an array of unique keys based on data and totalCount
    const keys = Array.from({ length: totalCount }, (_, index) => index + 1);

    return (
        <div className="grid grid-cols-3 min-[450px]:grid-cols-4 md:grid-cols-3 xl:grid-cols-4">
            {keys.map((key) => {
                const item = data.find((d) => d.id === key);
                return item == null ? (
                    <Tile
                        key={`unknown-${key}`} // Use a unique key for "Unknown" items
                        data={{
                            element: null,
                            iconUrl:
                                "https://res.cloudinary.com/dxyzeg3rg/image/upload/v1697615110/MyGameAssets/Unknown_dlkhzf.png",
                        }}
                        setModalData={null}
                    />
                ) : (
                    <Tile
                        key={item.id} // Use a unique key based on item.id for "Tile" items
                        data={item}
                        setModalData={setModalData}
                    />
                );
            })}
        </div>
    );
};

export default LibraryList;
