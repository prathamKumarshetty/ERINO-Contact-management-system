const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// Create a new contact
// backend/routes/contactRoutes.js
router.post('/contacts', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json(contact);
    } catch (err) {
        if (err.code === 11000) {
            // Duplicate key error for unique fields
            return res.status(400).json({ error: 'Email already exists. Please use a different email.' });
        }
        console.error("Error saving contact:", err);
        res.status(400).json({ error: err.message });
    }
});



// Get all contacts
router.get('/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a contact
router.put('/contacts/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(contact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a contact
router.delete('/contacts/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Contact deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
