import React from "react";
import ConnectionCard from "./ConnectionCard";
import UserCard from "./UserCard";

const Connection = (props) => {
  const data = props.connections;
  return (
    <>
      <div className="flex justify-end  mb-3">
        <div className="border-solid border-2 border-slate-200 rounded-md min-w-[250px] p-2">
          <UserCard />
        </div>
      </div>

      <div className=" h-[60px] w-full rounded-md bg-indigo-800">
        <h1 className="p-2 text-xl font-bold text-white">My Connections</h1>
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {data.map((items) => {
            return <ConnectionCard name={items.name} company={items.company} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Connection;
