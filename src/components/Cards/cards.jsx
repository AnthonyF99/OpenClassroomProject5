import React from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom
import LogementsData from "../../datas/logement.json";
import "../../styles/card.scss";

function Logements() {
  const handleCardClick = (id) => {
    // Ici, vous pouvez utiliser l'ID pour construire le lien et ouvrir la page appropriée
    console.log("Carte cliquée avec l'ID :", id);
    // Exemple de redirection vers une page spécifique en utilisant l'ID
    // window.location.href = `/logement/${id}`;
  };

  return (
    <div className="card-container">
      {LogementsData.map((logement) => (
        <Link
          key={logement.id}
          to={`/logement/${logement.id}`} // Utilisez to pour spécifier l'URL de destination
          onClick={() => handleCardClick(logement.id)}
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
  );
}

export default Logements;
