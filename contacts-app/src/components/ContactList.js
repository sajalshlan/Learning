import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props.contacts);
  const contactRenderList = props.contacts.map((contact) => {
    return <ContactCard contact={contact}></ContactCard>;
  });
  return <div className="ui celled list">{contactRenderList}</div>;
};

export default ContactList;
