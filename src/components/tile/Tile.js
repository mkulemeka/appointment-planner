import PropTypes from "prop-types";
import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile tile-title">{name}</p>
      {Object.keys(description).map((key, index) => (
        <p key={key + index} className="tile">
          {description[key]}
        </p>
      ))}
    </div>
  );
};

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
};
