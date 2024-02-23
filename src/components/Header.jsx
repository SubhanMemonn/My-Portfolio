import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../theme/theme";
const Header = () => {
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between sm:px-7 py-3 px-4">
      <div className="text-2xl">
        <button onClick={() => dispatch(toggleTheme())}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
      <div className="flex sm:gap-3 font-bold dark:text-gray-200 gap-2">
        <span className="hover:text-gray-500 cursor-pointer">
          <a href="#home">Home</a>
        </span>
        <span className="hover:text-gray-500 cursor-pointer">
          <a href="#about">About</a>
        </span>
        <span className="hover:text-gray-500 cursor-pointer">
          <a href="#projects">Projects</a>
        </span>
        <span className="hover:text-gray-500 cursor-pointer">
          <a href="#contact">Contact</a>
        </span>
      </div>
    </div>
  );
};

export default Header;
