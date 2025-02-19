// src/pages/Login.tsx
import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button,IconButton, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  // Handle login by calling the backend API
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        const data = await response.json();
        // If login is successful, store authentication data
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Logged in successfully!');
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Error during login. Please try again later.');
    }
  };

  // Optional: a dummy Google Sign-In simulation
  const handleGoogleSignIn = () => {
    localStorage.setItem('isAuthenticated', 'true');
    alert('Google Sign-In successful!');
    navigate('/dashboard');
  };

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 6, boxShadow: 5, borderRadius: 2 }}>
      <CardContent sx={{ background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)', p: 3 }}>
        <Typography variant="h5" textAlign="center" sx={{ color: '#0d47a1', mb: 2 }}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            variant="outlined"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="xyz@gmail.com"
          />
          <TextField
            variant="outlined"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="1234567890"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword} edge="end">
                    {showPassword ? 'Hide' : 'Show'}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button variant="contained" color="primary" type="submit">
            Sign In
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleGoogleSignIn}>
            Sign In with Google
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Login;