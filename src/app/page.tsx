import React from "react";
import HomeComponent from "./home/page";

const Home = () => {
  return (
    <div>
      <nav>
        <h1 className="text-2xl font-bold border-b-2 border-b-gray-400 m-8">
          Folder Structure
        </h1>
      </nav>
      
      <div className="">
        <HomeComponent />
      </div>
    </div>
  );
};

export default Home;
