// src/pages/Signup.tsx
import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(data));
        alert('Sign up successful!');
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Error during signup. Please try again later.');
    }
  };

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 6, boxShadow: 5, borderRadius: 2 }}>
      <CardContent sx={{ background: 'linear-gradient(135deg, #fff3e0, #ffe0b2)', p: 3 }}>
        <Typography variant="h5" textAlign="center" sx={{ color: '#e65100', mb: 2 }}>
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignup} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            variant="outlined"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            variant="outlined"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Sign Up
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Signup;