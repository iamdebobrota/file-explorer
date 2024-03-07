import React from "react";

const Folder = ({
  name,
  handleClick,
}: {
  name: string;
  handleClick: () => void;
}) => {
  return (
    <div className="cursor-pointer ml-4" onClick={handleClick}>
      📁 {name}
    </div>
  );
};

export default Folder;
