import LibraryList from "../components/LibraryList";

const Library = () => {

    // Mock data
    const weapons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
    const skills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    // const weapons = [1, 2, 3, 4, 5, 6];
    // const skills = [1, 2, 3, 4, 5, 6];

    return(
        <div className="w-full h-full p-4 overflow-y-scroll">
            <div className="w-full h-full flex flex-col md:flex-row md:justify-around items-center md:items-start">
                <LibraryList title={"Weapons"} data={weapons} />
                <LibraryList title={"Skills"} data={skills} />
            </div>
        </div>
    );
};

export default Library;