// frontend/src/components/ContactForm.js
import React, { useState, useEffect } from 'react';
import { createContact, updateContact } from '../services/contactService';
import { TextField, Button, Box, Typography, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const ContactForm = ({ fetchContacts, selectedContact, setSelectedContact }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: '',
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (selectedContact) {
            setFormData(selectedContact);
        }
    }, [selectedContact]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            if (selectedContact) {
                await updateContact(selectedContact._id, formData);
                setSelectedContact(null);
            } else {
                await createContact(formData);
            }
            fetchContacts();
            resetForm();
        } catch (err) {
            setError("An error occurred while saving the contact.");
        }
    };

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            company: '',
            jobTitle: '',
        });
        setSelectedContact(null);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: 3,
                maxWidth: 500,
                margin: 'auto',
                backgroundColor: '#d4e7fa', // Light blue background
                borderRadius: 2,
                boxShadow: 3,
                border: '2px solid #004d99', // Custom border color
            }}
        >
            <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                {selectedContact ? 'Edit Contact' : 'Add Contact'}
                <Box sx={{ width: '50px', height: '2px', backgroundColor: '#004d99', margin: 'auto', mt: 1 }} />
            </Typography>

            {/* First Name Field */}
            <TextField
                label="First Name"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                required
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountBoxIcon />
                        </InputAdornment>
                    ),
                }}
            />

            {/* Last Name Field */}
            <TextField
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                required
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonIcon />
                        </InputAdornment>
                    ),
                }}
            />

            {/* Phone Number Field */}
            <TextField
                label="Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                value={formData.phoneNumber}
                required
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PhoneIcon />
                        </InputAdornment>
                    ),
                }}
            />

            {/* Email Field */}
            <TextField
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                required
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AlternateEmailIcon />
                        </InputAdornment>
                    ),
                }}
            />

            {/* Company Field */}
            <TextField
                label="Company"
                name="company"
                onChange={handleChange}
                value={formData.company}
                required
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <WorkIcon />
                        </InputAdornment>
                    ),
                }}
            />

            {/* Job Title Field */}
            <TextField
                label="Job Title"
                name="jobTitle"
                onChange={handleChange}
                value={formData.jobTitle}
                required
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <WorkIcon />
                        </InputAdornment>
                    ),
                }}
            />

            {/* Submit and Reset Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#00897B', color: 'white', '&:hover': { backgroundColor: '#00796B' } }}
                    type="submit"
                >
                    {selectedContact ? 'Update' : 'Submit'}
                </Button>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#FFC107', color: 'black', '&:hover': { backgroundColor: '#FFA000' } }}
                    onClick={resetForm}
                >
                    Reset
                </Button>
            </Box>
            {error && <Typography color="error" align="center">{error}</Typography>}
        </Box>
    );
};

export default ContactForm;
