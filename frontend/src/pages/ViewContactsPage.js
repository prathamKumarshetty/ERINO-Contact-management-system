// frontend/src/pages/ViewContactsPage.js
import React from 'react';
import ContactList from '../components/ContactList';
import { Box, Typography } from '@mui/material';

const ViewContactsPage = ({ contacts, fetchContacts, setSelectedContact, page, setPage }) => {
    return (
        <Box sx={{ padding: 4, textAlign: 'center' }}>
            
            <ContactList
                contacts={contacts}
                fetchContacts={fetchContacts}
                setSelectedContact={setSelectedContact}
                page={page}
                setPage={setPage}
            />
        </Box>
    );
};

export default ViewContactsPage;
