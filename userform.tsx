// src/components/UserForm.tsx
import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Typography, Card, CardContent } from '@mui/material';


const UserForm: React.FC = () => {
  // Form state for user data
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  // State to track if any changes have been made (dirty flag)
  const [isDirty, setIsDirty] = useState(false);

  // Warn user of unsaved changes when trying to close or refresh the page
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes!';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  // Update form state and mark form as dirty on every change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setIsDirty(true);
  };

  // On form submission: auto-generate an ID (if not present), save data, and mark form as saved
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = formData.id || Date.now().toString();
    const dataToSave = { ...formData, id: newId };

    // Save to localStorage (or dispatch to Redux if desired)
    localStorage.setItem('userData', JSON.stringify(dataToSave));
    alert('User data saved!');
    setIsDirty(false);
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        mx: 'auto',
        mt: 4,
        boxShadow: 5,
        borderRadius: 2,
        overflow: 'visible',
      }}
    >
      <CardContent
        sx={{
          background: 'linear-gradient(135deg, #e0f7fa,rgb(215, 2, 2))',
          p: 3,
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 600, color: '#00796b' }}
        >
          User Data Form
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            variant="outlined"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover fieldset': {
                  borderColor: '#00796b',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#004d40',
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover fieldset': {
                  borderColor: '#00796b',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#004d40',
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover fieldset': {
                  borderColor: '#00796b',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#004d40',
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover fieldset': {
                  borderColor: '#00796b',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#004d40',
                },
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2, py: 1.5 }}
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserForm;