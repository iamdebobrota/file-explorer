import { Item } from "@/app/[id]/page";
import { FileItem } from "@/app/home/page";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LuFileSpreadsheet } from "react-icons/lu";

const Navbar = ({
  filterText,
  handleFilterChange,
  sortedFolders,
  setSortedFolders,
  filteredFolders,
}: {
  filterText: string;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortedFolders: FileItem[];
  setSortedFolders: Dispatch<SetStateAction<FileItem[]>>;
  filteredFolders: (payload: string) => void;
}) => {
  const [isSorted, setIsSorted] = useState(false);
  const [showFiles, setShowFiles] = useState("file");

  const handleFileFilter = (payload: string) => {
    setShowFiles((prev) => payload);
    filteredFolders(payload);
  };

  const handleResetFilter = () => {
    setShowFiles((prev) => "file");
  };

  return (
    <>
      <div className="flex items-center  mb-4 mt-6">
        <input
          type="text"
          placeholder="Search"
          value={filterText}
          onChange={handleFilterChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <div className="flex ml-4">
          <div
            onClick={() => {
              handleFileFilter("file");
            }}
            className={`p-1 px-4 flex items-center gap-2 border border-gray-700 ${
              showFiles == "file" ? "bg-blue-100" : ""
            } rounded-l-xl cursor-pointer`}>
            <LuFileSpreadsheet className="text-xl" />
            <p
              className={`font-bold ${
                showFiles == "file" ? "" : "text-gray-400"
              }`}>
              Files
            </p>
          </div>
          <div
            onClick={() => {
              handleFileFilter("folder");
            }}
            className={`p-1 px-4 flex items-center gap-2 border border-gray-700 ${
              showFiles == "folder" ? "bg-blue-100" : ""
            } rounded-r-xl cursor-pointer`}>
            <LuFileSpreadsheet className="text-xl" />
            <p
              className={`font-bold ${
                showFiles == "folder" ? "" : "text-gray-400"
              }`}>
              Folder
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setSortedFolders([...sortedFolders.reverse()]);
            setIsSorted(!isSorted);
          }}
          className="ml-4 px-2 py-1 border-2 rounded-md border-gray-900 cursor-pointer">
          Sort by {isSorted ? "Ascending" : "Descending"}
        </button>
        <button
          onClick={handleResetFilter}
          className="ml-4 px-2 py-1 border-2 rounded-md border-gray-900 cursor-pointer">
          Reset Filter
        </button>
      </div>
    </>
  );
};

export default Navbar;
