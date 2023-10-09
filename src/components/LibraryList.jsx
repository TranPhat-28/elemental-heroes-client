import Tile from "./Tile";

const LibraryList = ({ title, data }) => {
    return (
        <div className="w-full max-w-[380px] sm:max-w-[440px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[500px]">
            <h1 className="font-bold my-2">{title}</h1>
            <div className="grid grid-cols-3 min-[450px]:grid-cols-4 md:grid-cols-3 xl:grid-cols-4">
                {data.map((item) => (
                    <Tile key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default LibraryList;
