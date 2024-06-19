import PropTypes from "prop-types";
import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ appointmentsOrContacts }) => {
  return (
    <div>
      {appointmentsOrContacts.map(({ name, ...rest }, index) => (
        <Tile key={name + index} name={name} description={rest} />
      ))}
    </div>
  );
};

TileList.propTypes = {
  appointmentsOrContacts: PropTypes.array.isRequired,
};
