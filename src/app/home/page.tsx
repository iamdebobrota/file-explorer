"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import data from "../../../db.json";
import Content from "../components/content";
import Navbar from "../components/common/navbar";

interface FolderItem {
  id: string;
  name: string;
  type: string;
}

interface FileItem extends FolderItem {
  file_size: number;
  owner: string;
  children?: FolderItem[] | FolderItem;
}
const HomeComponent: React.FC = () => {
  const [folderStructure, setFolderStructure] = useState(data[0]);
  const [sortedFolders, setSortedFolders] = useState<FileItem[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const router = useRouter();
  
  const filteredFolders = (payload: string) => {
    let folders = folderStructure?.children.map(
      (el) => el.type.toLowerCase() == payload && el
      );
    let newFiltered = folders.filter((el) => (el ? el : null));
    
    setSortedFolders(newFiltered);;
  };
 
  

  useEffect(() => {
    const sorted = [...folderStructure.children].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedFolders(sorted);
  }, []);

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
        filteredFolders={filteredFolders}
      />
      <Content
        sortedFolders={sortedFolders}
        filterText={filterText}
        handleClick={handleClick}
      />
    </div>
  );
};

export default HomeComponent;
