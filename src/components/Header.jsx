import PropTypes from "prop-types";
import { useState } from "react";
import { Menu } from "./Menu";

export const Header = ({ style }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  return (
    <>
      <header className="relative pb-40 md:pb-40" style={style}>
        <nav className="fixed w-full top-0 px-5 md:px-20 mt-10 z-50 flex items-center justify-between">
          <a href="./index.html">
            <img
              src="./design/logo.svg"
              alt=""
              className="w-[75px] md:w-[80px] h-auto"
            />
          </a>

          <button type="button" onClick={toggleMenu} className="outline-none">
            <img src="./design/menu.svg" alt="" className="w-[60px] h-auto" />
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
