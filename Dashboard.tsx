// src/components/Dashboard.tsx
import React, { useState, useEffect } from "react";
import {  Grid, Card, CardContent,Typography } from "@mui/material";
import { useSpring, animated } from 'react-spring';
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
import Counter from './Counter.tsx';

// Register Chart.js components
Chart.register(BarElement, CategoryScale, LinearScale);

interface UserData {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  // Load user data from localStorage when the dashboard mounts
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  // Dummy chart data simulating user activity trends
  const chartData = {
    labels: ['Profile Visits', 'Form Submissions', 'Logins', 'Edits'],
    datasets: [
      {
        label: 'User Activity',
        data: [20, 15, 10, 8],
        backgroundColor: [
          'rgba(75,192,192,0.6)',
          'rgba(153,102,255,0.6)',
          'rgba(255,159,64,0.6)',
          'rgba(54,162,235,0.6)'
        ],
      },
    ],
  };

  // React Spring fade-in animation for the whole dashboard
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { tension: 120, friction: 14 } });

  return (
    <animated.div style={fadeIn}>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Counter Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 5, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom textAlign="center">
                Counter
              </Typography>
              <Counter />
            </CardContent>
          </Card>
        </Grid>

        {/* User Profile Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 5, borderRadius: 2 }}>
            <CardContent sx={{ backgroundColor: '#e3f2fd', p: 3 }}>
              <Typography variant="h5" gutterBottom textAlign="center" sx={{ color: '#1976d2' }}>
                User Profile
              </Typography>
              {userData ? (
                <>
                  <Typography variant="body1"><strong>Name:</strong> {userData.name}</Typography>
                  <Typography variant="body1"><strong>Email:</strong> {userData.email}</Typography>
                  <Typography variant="body1"><strong>Address:</strong> {userData.address}</Typography>
                  <Typography variant="body1"><strong>Phone:</strong> {userData.phone}</Typography>
                </>
              ) : (
                <Typography variant="body1">No user data available.</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Dashboard Chart Card */}
        <Grid item xs={12}>
          <Card sx={{ boxShadow: 5, borderRadius: 2 }}>
            <CardContent sx={{ background: 'linear-gradient(135deg, #fff3e0, #ffe0b2)', p: 3 }}>
              <Typography variant="h5" gutterBottom textAlign="center" sx={{ color: '#fb8c00' }}>
                User Activity Trends
              </Typography>
              <Bar data={chartData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </animated.div>
  );
};

export default Dashboard;