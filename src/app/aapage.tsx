"use client";
import { usePathname, useRouter } from "next/navigation";
import data from "../../db.json";
import { useState, useEffect } from "react";

interface Item {
  id: number;
  name: string;
  type: string;
  children?: Item[];
}
interface FolderItem {
  id: string;
  name: string;
  type: string;
}
const Home = () => {
  const router = useRouter();
  const id = usePathname();
  const [currentItem, setCurrentItem] = useState<Item>(data[0]);
  const [selectedItem, setSelectedItem] = useState<Item | undefined>();
  const [filterText, setFilterText] = useState<string>("");
  const [sortedFolders, setSortedFolders] = useState<FolderItem[]>([]);


  useEffect(() => {
    if (id) {
      const targetId = parseInt(id as string);
      const foundItem = findItemById(data[0], targetId);
      setSelectedItem(foundItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [id]);

  useEffect(() => {
    //@ts-ignore
    const sorted = [...currentItem.children].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedFolders(sorted);
  }, [currentItem]);


  const findItemById = (item: Item, targetId: number): Item | undefined => {
    if (item.id === targetId) {
      return item;
    }
    if (item.children) {
      for (const child of item.children) {
        const result = findItemById(child, targetId);
        if (result) {
          return result;
        }
      }
    }
    return undefined;
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const handleClick = (childId: number) => {
    router.push(`/${childId}`);
  };

  return (
    <div>
      {selectedItem ? (
        <div>
          {selectedItem.type === "folder" ? (
            <FolderPage folder={selectedItem} handleClick={handleClick} />
          ) : (
            <FilePage file={selectedItem} />
          )}
        </div>
      ) : (
        <div className="m-8">
          <h1 className="text-2xl font-bold border-b-2">Folder Structure</h1>
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
          <ul className="text-xl m-4">
            {currentItem &&
              //@ts-ignore
              currentItem.children
                .filter((item) =>
                  item.name.toLowerCase().includes(filterText.toLowerCase())
                )
                .map((item) => (
                  <li key={item.id}>
                    <div
                      className=""
                      style={{ cursor: "pointer" }}
                      onClick={() => handleClick(item.id)}>
                      {item.type === "folder" ? "📁" : "📄"} {item.name}
                    </div>
                  </li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const FolderPage = ({
  folder,
  handleClick,
}: {
  folder: Item;
  handleClick: (childId: number) => void;
}) => {
  return (
    <div>
      <h1>{folder.name}</h1>
      {folder.children &&
        folder.children.map((child) => (
          <div
            key={child.id}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(child.id)}>
            {child.type === "folder" ? "📁" : "📄"} {child.name}
          </div>
        ))}
    </div>
  );
};

const FilePage = ({ file }: { file: Item }) => {
  return (
    <div>
      <h1>{file.name}</h1>
      <p>This is a file.</p>
    </div>
  );
};

export default Home;
