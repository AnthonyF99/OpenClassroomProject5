// Banner.jsx

import React from "react";
import PropTypes from "prop-types";
import "../../styles/banner.scss";

function Banner({ imageUrl, isHomePage }) {
  return (
    <div
      className={`banner ${isHomePage ? "home-banner" : ""}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {isHomePage && (
        <div className="banner-text">
          <h1>Chez vous,</h1>
          <h2 className="subtitle">partout et ailleurs</h2>
        </div>
      )}
    </div>
  );
}

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  isHomePage: PropTypes.bool.isRequired,
};

export default Banner;
