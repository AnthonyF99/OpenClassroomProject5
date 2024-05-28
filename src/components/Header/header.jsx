import { NavLink } from "react-router-dom";
import "../../styles/header.scss";
import logo from "../../assets/LOGO.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="KASA logo" className="Kasa-logo" />
      <nav className="navlink">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
