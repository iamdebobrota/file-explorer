"use client";
import { useRouter } from "next/navigation";
import { Item } from "../[id]/page";

const FolderPage = ({ folder }: { folder: Item }) => {
  const router = useRouter();

  const handleClick = (childId: number) => {
    router.push(`/${childId}`);
  };

  return (
    <div className="m-8 ">
      <div>
        <h1 className="text-xl font-bold mb-4 border-b ">{folder.name}</h1>
        
      </div>
      {folder?.children?.length ? (
        folder.children &&
        folder.children.map((child) => (
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
