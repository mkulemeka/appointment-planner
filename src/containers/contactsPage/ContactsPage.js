import React, { useEffect, useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import PropTypes from "prop-types";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (isDuplicate) return;

    addContact(name, phone, email);
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const duplicate = contacts.some(
      (someContact) => someContact.name.toLowerCase() === name.toLocaleLowerCase()
    );
    setIsDuplicate(duplicate);
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>
          Add Contact{" "}
          {isDuplicate ? (
            <span style={{ color: "red" }}>- Name already exists</span>
          ) : (
            ""
          )}
        </h2>
        <ContactForm
          isDuplicate={isDuplicate}
          handleSubmit={handleSubmit}
          name={name}
          email={email}
          phone={phone}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList appointmentsOrContacts={contacts} />
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};
