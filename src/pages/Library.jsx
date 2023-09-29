import LibraryList from "../components/LibraryList";

const Library = () => {

    // Mock data
    const weapons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const skills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    // const weapons = [1, 2, 3, 4, 5, 6];
    // const skills = [1, 2, 3, 4, 5, 6];

    return(
        <div className="w-full h-full p-4 overflow-y-scroll">
            <div className="w-full h-full flex flex-col items-center">
                <h1 className="font-bold my-2 self-start">Weapons</h1>
                <LibraryList data={weapons} />
                <h1 className="font-bold my-2 self-start">Skills</h1>
                <LibraryList data={skills} />
            </div>
        </div>
    );
};

export default Library;