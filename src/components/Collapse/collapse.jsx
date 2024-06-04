import React, { useState } from "react";
import "../../styles/collapse.scss";
import arrow from "../../assets/arrow.svg";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setHasUserInteracted(true); // Indique que l'utilisateur a interagi avec la collapse
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
      <div
        className={`menu-content ${isOpen ? "open" : ""} ${
          hasUserInteracted && !isOpen ? "not-open" : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default Collapse;
