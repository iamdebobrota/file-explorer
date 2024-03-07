import Image from "next/image";
import { Item } from "../[id]/page";

const FilePage = ({ file }: { file: Item }) => {
  return (
    <div className="m-8 bg-gray-100 p-4">
      <h1 className="font-bold">{file.name}</h1>
      <p>This is a file.</p>
      <Image
        src={"https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png"}
        alt="image"
        width={100}
        height={100}
      />
    </div>
  );
};
export default FilePage;
