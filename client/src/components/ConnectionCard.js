import React from "react";

const ConnectionCard = (props) => {
  // const onDeleteHandler = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg flex justify-between items-center p-4 border-solid border-2 border-slate-200 ">
        <div>
          <h1 className="text-lg font-bold ml-4">{props.name}</h1>
          <p className="text-slate-600 ml-4">{props.company}</p>
          <button
            className=" bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
            onClick="onDeleteHandler"
          >
            Remove Connection
          </button>
        </div>
        <div>
          <img
            alt="Placeholder"
            className="block rounded-full w-100 h-100"
            src="https://picsum.photos/100/100/?people"
          />
        </div>
      </article>
    </div>
  );
};

export default ConnectionCard;
