// frontend/src/pages/AddContactPage.js
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Box, Typography, Card, CardContent } from '@mui/material';

const AddContactPage = ({ fetchContacts, setSelectedContact }) => {
    return (
        <Box sx={{ padding: 4, textAlign: 'center' }}>
           
            <Card sx={{ maxWidth: 600, margin: 'auto', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                <CardContent>
                    <ContactForm fetchContacts={fetchContacts} setSelectedContact={setSelectedContact} />
                </CardContent>
            </Card>
        </Box>
    );
};

export default AddContactPage;
