import React from "react";

const File = ({
  name,
  handleClick,
}: {
  name: string;
  handleClick: () => void;
}) => {
  return (
    <div className="ml-4 flex space-x-1 cursor-pointer" onClick={handleClick}>
      <div>📄</div>
      <p>{name}</p>
    </div>
  );
};

export default File;
