"use client";
import { useRouter } from "next/navigation";
import { Item } from "../[id]/page";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { useState } from "react";

const FolderPage = ({ folder }: { folder: Item }) => {
  const router = useRouter();
  const [isAscending, setIsAscending] = useState(true);

  const handleClick = (childId: number) => {
    router.push(`/${childId}`);
  };
  const handleSort = () => {
    setIsAscending((prevState) => !prevState);
  };

  const sortedChildren = folder.children
    ? [...folder.children].sort((a, b) => {
        if (isAscending) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      })
    : [];

    
  return (
    <div className="m-8 ">
      <div className="flex gap-4 mb-4 border-b items-center ">
        <h1 className="text-xl font-bold">{folder.name}</h1>
        <div className="cursor-pointer" onClick={handleSort}>
          {isAscending ? <FaArrowUp /> : <FaArrowDown />}
        </div>
      </div>
      {folder?.children?.length ? (
        sortedChildren.map((child) => (
          <div
            key={child.id}
            className=" w-max p-1 m-2 text-xl"
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(child.id)}>
            {child.type === "folder" ? "📁" : "📄"} {child.name}
          </div>
        ))
      ) : (
        <>Not files or folder</>
      )}
    </div>
  );
};
export default FolderPage;
