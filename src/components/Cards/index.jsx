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
        <a
          href={`#/logement/${logement.id}`}
          key={logement.id}
          onClick={() => handleCardClick(logement.id)}
        >
          <div className="card">
            <div className="card-content">
              <div className="card-img">
                <img src={logement.cover} alt={logement.title}></img>
              </div>
              <div className="card-title">
                <h3>{logement.title}</h3>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Logements;
