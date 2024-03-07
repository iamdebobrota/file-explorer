"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import data from "../../db.json";
import Content from "./components/content";
import Navbar from "./components/navbar";

interface FolderItem {
  id: string;
  name: string;
  type: string;
}

const Home = () => {
  const [folderStructure, setFolderStructure] = useState(data[0]);
  const [sortedFolders, setSortedFolders] = useState<FolderItem[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const sorted = [...folderStructure.children].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    // @ts-ignore
    setSortedFolders(sorted);
  }, [folderStructure]);

  const handleClick = (folder: FolderItem) => {
    router.push(`/${folder.id}`);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <div className="mx-8 my-6">
    
      <Navbar
        filterText={filterText}
        handleFilterChange={handleFilterChange}
        sortedFolders={sortedFolders}
        setSortedFolders={setSortedFolders}
      />
      <Content
        sortedFolders={sortedFolders}
        filterText={filterText}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Home;
