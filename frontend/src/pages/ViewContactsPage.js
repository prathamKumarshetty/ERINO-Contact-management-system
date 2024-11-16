// frontend/src/pages/ViewContactsPage.js
import React, { useState, useEffect } from 'react';
import { fetchContacts } from '../services/contactService';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';

const ViewContactsPage = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null); // For edit functionality

    const fetchContactsData = async () => {
        const data = await fetchContacts();
        setContacts(data);
    };

    useEffect(() => {
        fetchContactsData();
    }, []);

    return (
        <div>
            {selectedContact ? (
                // Render ContactForm if a contact is selected for editing
                <ContactForm
                    fetchContacts={fetchContactsData}
                    selectedContact={selectedContact}
                    setSelectedContact={setSelectedContact}
                />
            ) : (
                // Render ContactList if no contact is being edited
                <ContactList
                    contacts={contacts}
                    fetchContacts={fetchContactsData}
                    setSelectedContact={setSelectedContact}
                />
            )}
        </div>
    );
};

export default ViewContactsPage;
