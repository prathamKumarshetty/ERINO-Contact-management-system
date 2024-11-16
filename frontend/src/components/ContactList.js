import React, { useState } from 'react';
import { deleteContact } from '../services/contactService';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Typography,
    TextField,
    Box,
    Pagination,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = ({ contacts, fetchContacts, setSelectedContact }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            try {
                await deleteContact(id);
                fetchContacts();
            } catch (error) {
                console.error('Error deleting contact:', error); // Debugging step
            }
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1); // Reset to first page whenever rows per page is changed
    };

    // Filter contacts based on search query
    const filteredContacts = contacts.filter((contact) => {
        const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
        return (
            fullName.includes(searchQuery) ||
            contact.email.toLowerCase().includes(searchQuery) ||
            contact.phoneNumber.toLowerCase().includes(searchQuery) ||
            contact.company.toLowerCase().includes(searchQuery) ||
            contact.jobTitle.toLowerCase().includes(searchQuery)
        );
    });

    // Calculate pagination based on current page and rows per page
    const paginatedContacts = filteredContacts.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    );

    return (
        <Box sx={{ maxWidth: '100%', margin: 'auto', marginTop: 4 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Contact List
            </Typography>

            {/* Search Box */}
            <TextField
                label="Search Contacts"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleSearchChange}
                placeholder="Search by name, email, phone number, company, or job title"
            />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 750 }} aria-label="contacts table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Job Title</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedContacts.map((contact) => (
                            <TableRow key={contact._id}>
                                <TableCell sx={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                    {contact.firstName} {contact.lastName}
                                </TableCell>
                                <TableCell sx={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                    {contact.email}
                                </TableCell>
                                <TableCell sx={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                    {contact.phoneNumber}
                                </TableCell>
                                <TableCell sx={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                    {contact.company}
                                </TableCell>
                                <TableCell sx={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                    {contact.jobTitle}
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" gap={1}>
                                        {/* Debugging added for Edit */}
                                        <IconButton
                                            onClick={() => {
                                                console.log('Edit Clicked, Contact:', contact);
                                                setSelectedContact(contact);
                                            }}
                                            sx={{
                                                backgroundColor: '#2196F3',
                                                color: 'white',
                                                '&:hover': { backgroundColor: '#1976D2' },
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>

                                        {/* Debugging added for Delete */}
                                        <IconButton
                                            onClick={() => {
                                                console.log('Delete Clicked, Contact ID:', contact._id);
                                                handleDelete(contact._id);
                                            }}
                                            sx={{
                                                backgroundColor: '#f44336',
                                                color: 'white',
                                                '&:hover': { backgroundColor: '#d32f2f' },
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Pagination and Rows Per Page Selector */}
                <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                    {/* Rows Per Page Selector */}
                    <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                        <InputLabel>Rows per page</InputLabel>
                        <Select
                            value={rowsPerPage}
                            onChange={handleRowsPerPageChange}
                            label="Rows per page"
                        >
                            {[5, 10, 15, 20].map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {/* Pagination Component */}
                    <Pagination
                        count={Math.ceil(filteredContacts.length / rowsPerPage)}
                        page={page}
                        onChange={handleChangePage}
                        variant="outlined"
                        shape="rounded"
                        sx={{
                            '& .MuiPaginationItem-root': {
                                color: 'white',
                                backgroundColor: '#333',
                                '&:hover': { backgroundColor: '#444' },
                                '&.Mui-selected': {
                                    backgroundColor: '#1976D2',
                                    color: 'white',
                                },
                            },
                            '& .MuiPaginationItem-ellipsis': { color: 'white' },
                        }}
                    />
                </Box>
            </TableContainer>
        </Box>
    );
};

export default ContactList;
