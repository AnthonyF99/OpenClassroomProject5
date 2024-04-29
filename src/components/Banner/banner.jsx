// Banner.jsx

import React from "react";
import PropTypes from "prop-types";
import "../../styles/banner.scss";

function Banner({ imageUrl, isHomePage }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      {isHomePage && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  isHomePage: PropTypes.bool.isRequired,
};

export default Banner;
