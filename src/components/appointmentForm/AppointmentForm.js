import { ContactPicker } from "../contactPicker/ContactPicker";
import PropTypes from "prop-types";
import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const handleChange = ({ target }) => {
    setContact(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Appointment title {""}
        <input
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          required
        />
      </label>
      <label>
        Appointment With {""}
        <ContactPicker
          name="contact"
          contacts={contacts}
          handleChange={handleChange}
        />
      </label>
      <label>
        Date {""}
        <input
          type="date"
          value={date}
          onChange={({ target }) => setDate(target.value)}
          required
          min={getTodayString()}
        />
      </label>
      <label>
        Time {""}
        <input
          type="time"
          value={time}
          onChange={({ target }) => setTime(target.value)}
          required
        />
      </label>
      <input type="submit" value="Add appointment" />
    </form>
  );
};

AppointmentForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setContact: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
