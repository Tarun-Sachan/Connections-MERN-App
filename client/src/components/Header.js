import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between  border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <div>
        <Link to="/" className="text-3xl">GoalSetter</Link>
      </div>

      <ul className="w-1/3 flex flex-[1] items-center justify-end overflow-hidden">
        <li className="pr-4">
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
