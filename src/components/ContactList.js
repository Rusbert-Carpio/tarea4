import React from 'react';

const ContactList = ({ contacts }) => {
    return (
        <ul className="contact-list">
            {contacts.map((contact, index) => (
                <li key={index} className="contact-item">
                    {contact.name} {contact.surname} - {contact.phone}
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
