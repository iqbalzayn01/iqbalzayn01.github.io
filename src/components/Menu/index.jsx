import PropTypes from "prop-types";
import { Links } from "../Links";

export default function Menu({ setMenu }) {
  return (
    <nav className="w-full h-screen flex items-center pl-20">
      <Links setMenu={setMenu} />
    </nav>
  );
}

Menu.propTypes = {
  setMenu: PropTypes.func.isRequired,
};
