import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Folder = ({
  name,
  handleClick,
}: {
  name: string;
  handleClick: () => void;
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex items-center justify-between pr-8">
      <div className="cursor-pointer ml-4" onClick={handleClick}>
        📁 {name}
      </div>
      <BiDotsVerticalRounded
        className="cursor-pointer relative z-10"
        onClick={handleModalClick}
      />
      {showModal && <Modal />}
    </div>
  );
};

const Modal = () => {
  return (
    <div
      className="absolute right-72   z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button">
      <div className="py-1" role="none">
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          id="menu-item-0">
          Account settings
        </a>
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          id="menu-item-1">
          Support
        </a>
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          id="menu-item-2">
          License
        </a>
        <form method="POST" action="#" role="none">
          <button
            type="submit"
            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
            role="menuitem"
            id="menu-item-3">
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
};
export default Folder;
