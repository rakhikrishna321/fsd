import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token or any other user data from local storage
    localStorage.removeItem('token'); // Adjust this if you're using a different key

    // Redirect to the login page
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
      {/* Add admin-specific features and information here */}
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleLogout} 
        fullWidth
      >
        Logout
      </Button>
    </Container>
  );
};

export default AdminDashboard;
