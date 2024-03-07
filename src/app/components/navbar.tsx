import React from "react";

const Navbar = ({
  filterText,
  handleFilterChange,
  sortedFolders,
  setSortedFolders,
}: any) => {
  return (
    <>
      <h1 className="text-2xl font-bold border-b-2 border-b-gray-400">
        Folder Structure
      </h1>
      <div className="flex items-center justify-between mb-4 mt-6">
        <input
          type="text"
          placeholder="Search"
          value={filterText}
          onChange={handleFilterChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={() => setSortedFolders([...sortedFolders.reverse()])}
          className="ml-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Reverse Sort
        </button>
      </div>
    </>
  );
};

export default Navbar;
