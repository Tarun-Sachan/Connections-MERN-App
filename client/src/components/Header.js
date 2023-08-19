import React from "react";
//import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
//import { useSelect } from "@material-tailwind/react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };
  return (
    <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between  border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <div>
        <Link to="/" className="text-3xl">
          GoalSetter
        </Link>
      </div>

      <ul className="w-1/3 flex flex-[1] items-center justify-end overflow-hidden">
        {user ? (
          <li className="pr-4">
            <button onClick={onLogoutHandler}>Logout</button>
          </li>
        ) : (
          <>
            <li className="pr-4">
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
