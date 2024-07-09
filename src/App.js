import React, { useState } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Agenda Web</h1>
            </header>
            <main id="main-container">
                <AddContact addContact={addContact} />
                <ContactList contacts={contacts} />
            </main>
        </div>
    );
};

export default App;
