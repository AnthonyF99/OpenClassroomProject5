import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../Collapse/collapse.jsx";
import LogementsData from "../../datas/logement.json";
import Star from "../Star/star.jsx";
import "../../styles/logementsdetails.scss";

function LogementsDetails() {
  const { logementId } = useParams();
  const thisLogement = LogementsData.find(
    (logement) => logement.id === logementId
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  if (!thisLogement) {
    // Rediriger vers la page Error si le logement n'est pas trouvé
    return <Navigate to="/error" replace />;
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === thisLogement.pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? thisLogement.pictures.length - 1 : prevSlide - 1
    );
  };

  const getRatingValue = () => {
    const ratingString = thisLogement.rating; // Assuming "rating" is a string
    return parseFloat(ratingString); // Convert string to number
  };

  const shouldShowControls = thisLogement.pictures.length > 1;

  return (
    <section id="logement-page">
      <div className="logements-details-informations">
        <div className="slider">
          <div className="slides-container">
            {thisLogement.pictures.map((picture, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                {index === currentSlide && (
                  <>
                    <img src={picture} alt={`${thisLogement.title}`} />
                    {shouldShowControls && (
                      <div className="slider-pagination">{`${
                        currentSlide + 1
                      }/${thisLogement.pictures.length}`}</div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          {shouldShowControls && (
            <>
              <button className="prev" onClick={prevSlide}>
                &#10094;
              </button>
              <button className="next" onClick={nextSlide}>
                &#10095;
              </button>
            </>
          )}
        </div>

        <div className="information">
          <div className="host-logement">
            <h1>{thisLogement.title}</h1>
            <h2>{thisLogement.host.name}</h2>
            <div className="host-icon">
              <img
                src={thisLogement.host.picture}
                alt={thisLogement.host.name}
              />
            </div>
          </div>
          <div id="location">
            <p>{thisLogement.location}</p>
          </div>
          <div className="tags">
            <ul>
              {thisLogement.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            <div className="rating">
              <div className="star-container">
                <Star rating={getRatingValue()} />
              </div>
              <div className="host-info-mobile">
                <span className="host-name-mobile">
                  {thisLogement.host.name}
                </span>
                <span className="host-icon-mobile">
                  <img
                    src={thisLogement.host.picture}
                    alt={thisLogement.host.name}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse-logement">
          <Collapse
            title="Description"
            content=<p>{thisLogement.description}</p>
          />
          <Collapse
            title="Équipements"
            content=<ul>
              {thisLogement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          />
        </div>
      </div>
    </section>
  );
}

export default LogementsDetails;
