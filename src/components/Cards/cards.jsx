import React from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom
import LogementsData from "../../datas/logement.json";
import "../../styles/card.scss";

function Logements() {
  //const handleCardClick = (id) => {};

  return (
    <section id="logement-cards">
      <div className="card-container">
        {LogementsData.map((logement) => (
          <Link
            key={logement.id}
            to={`/logement/${logement.id}`} // Utilisez to pour spécifier l'URL de destination
            //onClick={() => handleCardClick(logement.id)}
            className="card-link" // Ajoutez une classe pour le style
          >
            <div className="card">
              <div className="card-content">
                <div className="card-img">
                  <img src={logement.cover} alt={logement.title}></img>
                </div>
                <div className="card-title">
                  <h4>{logement.title}</h4>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Logements;
