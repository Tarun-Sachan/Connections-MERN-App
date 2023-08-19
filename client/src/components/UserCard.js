import React from "react";

const UserCard = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img
          alt="Placeholder"
          className="block rounded-md w-15 h-15"
          src="https://picsum.photos/40/40/?people"
        />
      </div>
      <div className="pr-6">
        <p className="text-slate-400 text-sm">Welcome back,</p>
        <h1>User</h1>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default UserCard;
