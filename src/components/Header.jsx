import PropTypes from "prop-types";
import { useState } from "react";
import { Menu } from "./Menu";
import { Links } from "./Links";

export const Header = ({ style }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <>
      <header className="px-5 py-10 md:px-32" style={style}>
        <nav className="flex items-center justify-between">
          <a href="./index.html">
            <img
              src="./design/logo.svg"
              alt=""
              className="w-[75px] md:w-[80px] h-auto"
            />
          </a>

          <Links />

          {/* Mobile */}
          <button
            type="button"
            onClick={toggleMenu}
            className="block md:hidden outline-none"
          >
            <svg
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[60px] h-auto fill-white"
            >
              <mask
                id="mask0_825_390"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="30"
                height="30"
              >
                <rect width="30" height="30" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_825_390)">
                <path d="M5 22.5C4.64583 22.5 4.34896 22.3802 4.10937 22.1406C3.86979 21.901 3.75 21.6042 3.75 21.25C3.75 20.8958 3.86979 20.599 4.10937 20.3594C4.34896 20.1198 4.64583 20 5 20H25C25.3542 20 25.651 20.1198 25.8906 20.3594C26.1302 20.599 26.25 20.8958 26.25 21.25C26.25 21.6042 26.1302 21.901 25.8906 22.1406C25.651 22.3802 25.3542 22.5 25 22.5H5ZM5 16.25C4.64583 16.25 4.34896 16.1302 4.10937 15.8906C3.86979 15.651 3.75 15.3542 3.75 15C3.75 14.6458 3.86979 14.349 4.10937 14.1094C4.34896 13.8698 4.64583 13.75 5 13.75H25C25.3542 13.75 25.651 13.8698 25.8906 14.1094C26.1302 14.349 26.25 14.6458 26.25 15C26.25 15.3542 26.1302 15.651 25.8906 15.8906C25.651 16.1302 25.3542 16.25 25 16.25H5ZM5 10C4.64583 10 4.34896 9.88021 4.10937 9.64062C3.86979 9.40104 3.75 9.10417 3.75 8.75C3.75 8.39583 3.86979 8.09896 4.10937 7.85937C4.34896 7.61979 4.64583 7.5 5 7.5H25C25.3542 7.5 25.651 7.61979 25.8906 7.85937C26.1302 8.09896 26.25 8.39583 26.25 8.75C26.25 9.10417 26.1302 9.40104 25.8906 9.64062C25.651 9.88021 25.3542 10 25 10H5Z" />
              </g>
            </svg>
          </button>
        </nav>
      </header>

      <div
        className={`fixed bg-primary ${
          menu ? "w-full md:w-[600px] opacity-100" : "w-[0px] opacity-0"
        } h-screen right-0 top-0 z-40 transition-all duration-1000 ease-in-out`}
      >
        <Menu />
      </div>
    </>
  );
};

Header.propTypes = {
  style: PropTypes.object.isRequired,
};
