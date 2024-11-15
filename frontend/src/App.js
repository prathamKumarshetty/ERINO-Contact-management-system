// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddContactPage from './pages/AddContactPage';
import ViewContactsPage from './pages/ViewContactsPage';
import { fetchContacts } from './services/contactService';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [page, setPage] = useState(1);

    const loadContacts = async (page = 1, limit = 10, sortField = 'firstName', sortOrder = 'asc') => {
        try {
            const data = await fetchContacts(page, limit, sortField, sortOrder);
            setContacts(data);
        } catch (error) {
            console.error("Error loading contacts:", error);
        }
    };

    useEffect(() => {
        loadContacts(page);
    }, [page]);

    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Redirect root URL to /add-contact */}
                <Route path="/" element={<Navigate to="/add-contact" />} />
                
                <Route path="/add-contact" element={<AddContactPage fetchContacts={() => loadContacts(page)} setSelectedContact={setSelectedContact} />} />
                <Route path="/view-contacts" element={<ViewContactsPage contacts={contacts} fetchContacts={() => loadContacts(page)} setSelectedContact={setSelectedContact} page={page} setPage={setPage} />} />
            </Routes>
        </Router>
    );
};

export default App;
