import PropTypes from "prop-types";
import React from "react";

export const ContactPicker = ({ contacts, handleChange, name }) => {
  return (
    <select onChange={handleChange} name={name}>
      <option key={-1} value="" defaultValue={true}>
        No Contact Selected
      </option>
      {contacts.map((contact, index) => (
        <option key={contact.name + index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};

ContactPicker.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
