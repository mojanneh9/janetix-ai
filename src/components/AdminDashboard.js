import React from 'react';
import { Box, Grid, Card, Typography, Button } from '@mui/material'; // Removed CardContent
import { AddCircle, Edit, Analytics } from '@mui/icons-material';

const AdminDashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>Admin Dashboard</Typography>

      <Grid container spacing={3}>
        {/* Manage Projects */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
            <AddCircle fontSize="large" color="primary" />
            <Typography variant="h5">Add New Project</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>Create</Button>
          </Card>
        </Grid>

        {/* Edit Content */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
            <Edit fontSize="large" color="primary" />
            <Typography variant="h5">Edit Website Content</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>Edit</Button>
          </Card>
        </Grid>

        {/* Analytics */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
            <Analytics fontSize="large" color="primary" />
            <Typography variant="h5">AI Analytics</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>View</Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;