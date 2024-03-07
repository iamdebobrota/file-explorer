"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const router = usePathname();

  // State to track the current active link
  const [activeLink, setActiveLink] = useState(router);

  // Function to handle link click and update active link state
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="fixed top-0 left-0 bg-gray-50 h-full w-64 flex-none p-4">
      <div className="flex items-center justify-center gap-2">
        <Image
          src={
            "https://play-lh.googleusercontent.com/t-juVwXA8lDAk8uQ2L6d6K83jpgQoqmK1icB_l9yvhIAQ2QT_1XbRwg5IpY08906qEw"
          }
          alt="google drive"
          className="mix-blend-multiply mb-2"
          width={50}
          height={50}
        />
        <h2 className="text-xl font-bold mb-4">Google Drive</h2>
      </div>
      <ul className="mt-12 ml-8">
        <li className="mb-2">
          <a
            href="/"
            className={`${
              activeLink === "/" ? "font-bold" : ""
            } hover:text-gray-300`}
            onClick={() => handleLinkClick("home")}>
            Home
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-300">
            Link 2
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-300">
            Link 3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
