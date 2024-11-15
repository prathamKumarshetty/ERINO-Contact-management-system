// frontend/src/services/contactService.js
import axios from 'axios';

const API_URL = 'http://localhost:5001/api/contacts';

// Fetch all contacts
export const fetchContacts = async (page = 1, limit = 10, sortField = 'firstName', sortOrder = 'asc') => {
    try {
        const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching contacts:", error);
        throw error;
    }
};

// Create a new contact
export const createContact = async (contact) => {
    try {
        const response = await axios.post(API_URL, contact);
        return response.data;
    } catch (error) {
        console.error("Error adding contact:", error);
        throw error;
    }
};

// Update a contact
export const updateContact = async (id, updatedContact) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedContact);
        return response.data;
    } catch (error) {
        console.error("Error updating contact:", error);
        throw error;
    }
};

// Delete a contact
export const deleteContact = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting contact:", error);
        throw error;
    }
};
