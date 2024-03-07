import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

const File = ({
  name,
  handleClick,
}: {
  name: string;
  handleClick: () => void;
}) => {
  return (
    <div className="flex items-center justify-between pr-8" >
     <div className="ml-4 flex space-x-1 cursor-pointer" onClick={handleClick}>
      <div>📄</div>
      <p>{name}</p>
     </div>
      <BiDotsVerticalRounded className="cursor-pointer " />
    </div>
  );
};

export default File;
