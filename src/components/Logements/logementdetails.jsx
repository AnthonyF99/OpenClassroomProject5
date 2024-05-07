import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../Collapse/collapse.jsx";
import LogementsData from "../../datas/logement.json";
import "../../styles/logementsdetails.scss";

function LogementsDetails() {
  const { logementId } = useParams();
  const thisLogement = LogementsData.find(
    (logement) => logement.id === logementId
  );

  if (!thisLogement) {
    // Rediriger vers la page Error si le logement n'est pas trouvé
    return <Navigate to="/error" replace />;
  }

  return (
    <div className="logements-details-informations">
      <div className="slider"></div>
      <div className="information">
        <h1>{thisLogement.title}</h1>
        <h2>{thisLogement.host.name}</h2>
        <p>{thisLogement.location}</p>
      </div>
      <div className="description">
        <Collapse title="Description" content={thisLogement.description} />
        <Collapse
          title="Equipements"
          content=<ul>
            {thisLogement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        />
      </div>
    </div>
  );
}

export default LogementsDetails;
