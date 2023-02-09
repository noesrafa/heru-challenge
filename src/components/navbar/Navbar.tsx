import "../../styles/Menu.css";
import { NavLink } from "react-router-dom";
import { HomeIcon, ImageIcon } from "./MenuIcons";

export default function Navbar() {
  return (
    <section className="nav-container">
      <NavLink to="/" >
        <img src={"/brand.svg"} alt="logo" />
      </NavLink>

      <div className="options">
        <NavLink to="/" className="options__item">
          {({ isActive }) => (
            <>
              <HomeIcon color={isActive ? "#1D8FF3" : "#9DA1AA"} />
              <span>Inicio</span>
            </>
          )}
        </NavLink>
        <NavLink to="/gifs" className="options__item">
          {({ isActive }) => (
            <>
              <ImageIcon color={isActive ? "#1D8FF3" : "#9DA1AA"} />
              <span>Gifs</span>
            </>
          )}
        </NavLink>
      </div>
      <div className="block"/>
    </section>
  );
}
