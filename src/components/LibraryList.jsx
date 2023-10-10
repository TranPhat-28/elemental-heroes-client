import { useState } from "react";
import InfoModal from "./InfoModal";
import Tile from "./Tile";

const LibraryList = ({ data, type }) => {
    const [modalData, setModalData] = useState(null);

    return (
        <div className="grid grid-cols-3 min-[450px]:grid-cols-4 md:grid-cols-3 xl:grid-cols-4">
            {data.map((item) => (
                <Tile key={item.id} data={item} type={type} setModalData={setModalData} />
            ))}

            <InfoModal data={modalData} />
        </div>
    );
};

export default LibraryList;
