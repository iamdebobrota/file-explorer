import React from "react";
import Folder from "./folder";
import File from "./file";
import { FileItem } from "../home/page";
import { FolderItem } from "../types/fileType";

const Content = ({
  sortedFolders,
  filterText,
  handleClick,
}: {
  sortedFolders: FileItem[];
  filterText: string;
  handleClick: (folder: FolderItem) => void;
}) => {
  return (
    <div>
      <ul className="text-xl w-[60%] h-[74dvh] bg-gray-50 pt-4">
        {sortedFolders
          .filter((item: any) =>
            item.name.toLowerCase().includes(filterText.toLowerCase())
          )
          .map((item: any) =>
            item.type === "folder" ? (
              <li
                key={item.id}
                className="m-2 border-b-[1px] border-gray-400 pb-2 pt-2">
                <Folder
                  name={item.name}
                  handleClick={() => handleClick(item)}
                />
              </li>
            ) : (
              <li
                key={item.id}
                className="m-2 border-b-[1px] border-gray-400 pb-2">
                <File name={item.name} handleClick={() => handleClick(item)} />
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default Content;
