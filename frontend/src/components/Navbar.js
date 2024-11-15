// frontend/src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="sticky" sx={{ background: 'linear-gradient(45deg,  #3366cc,#afcdfb)', boxShadow: 3 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box display="flex" alignItems="center">
                    <Box
                        component="img"
                        src="/contactLOGO1.png"
                        alt="Contact Logo"
                        sx={{ height: 50, width: 50, marginRight: 2 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                        Contact Management System
                    </Typography>
                </Box>

                <Tabs value={false} indicatorColor="secondary" textColor="inherit">
                    <Tab
                        label="Add Contact"
                        component={Link}
                        to="/add-contact"
                        sx={{
                            fontWeight: 'bold',
                            color: 'black',
                            '&:hover': {
                                color: 'black',
                                backgroundColor: '#005bbb',
                                borderRadius: '8px',
                            },
                        }}
                    />
                    <Tab
                        label="View Contacts"
                        component={Link}
                        to="/view-contacts"
                        sx={{
                            fontWeight: 'bold',
                            color: 'black',
                            '&:hover': {
                                color: 'black',
                                backgroundColor: '#005bbb',
                                borderRadius: '8px',
                            },
                        }}
                    />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
