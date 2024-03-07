"use client";
import { usePathname, useRouter } from "next/navigation";
import data from "../../../db.json";
import Image from "next/image";
import Content from "../components/content";
import FolderPage from "../components/folderPage";
import FilePage from "../components/filePage";
import Navbar from "../components/common/navbar";

export interface Item {
  id: number;
  name: string;
  type: string;
  children?: Item[];
}

const ItemPage = () => {
  const router = usePathname();
  const id = router.split("/")[1];
  const currentItem: Item = data[0];

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

  const selectedItem = id
    ? findItemById(currentItem, parseInt(id as string))
    : undefined;

  // console.log(selectedItem)

  return (
    <div className="mx-8 my-6">
      <div>
        {selectedItem ? (
          <div>
            {selectedItem.type === "folder" ? (
              <FolderPage folder={selectedItem} />
            ) : (
              <FilePage file={selectedItem} />
            )}
          </div>
        ) : (
          <div>Item not found.</div>
        )}
      </div>
    </div>
  );
};

export default ItemPage;
