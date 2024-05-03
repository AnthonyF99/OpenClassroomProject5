import React, { useState } from "react";
import "../../styles/collapse.scss"; // Assurez-vous d'avoir un fichier CollapseMenu.css correspondant
import arrow from "../../assets/arrow.svg";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse">
        <div className="title">{title}</div>
        <button
          className={`arrow ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <img src={arrow} alt="arrow" />
        </button>
      </div>
      <div className={`menu-content ${isOpen ? "open" : ""}`}>{content}</div>
    </div>
  );
}

export default Collapse;