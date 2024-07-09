import React, { useState } from 'react';

const AddContact = ({ addContact }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact({ name, surname, phone });
        setName('');
        setSurname('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default AddContact;
