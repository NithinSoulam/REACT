import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { animated, useSpring } from "react-spring";

const Counter: React.FC = () => {
  // Initialize count state and load from localStorage if available
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    const savedCount = localStorage.getItem('counter');
    if (savedCount) {
      setCount(parseInt(savedCount, 25));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('counter', count.toString());
  }, [count]);

  // Calculate fill percentage (each count increases fill by 10%, maxing at 100%)
  const fillPercentage = Math.min(count * 2, 100);

  // Animate the background using react-spring with a linear gradient.
  // The gradient fills from the bottom: green up to the fillPercentage, and the rest is the light background (#f0f2f5).
  const backgroundStyle = useSpring({
    background: `linear-gradient(to top,rgba(15, 255, 175, 0.48) ${fillPercentage}%, #f0f2f5 ${fillPercentage}%)`,
    config: {
      // Adjust tension and friction to mimic a smooth bezier-like easing effect
      tension: 170,
      friction: 26,
    },
  });

  // Handlers for button clicks
  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const handleReset = () => setCount(0);

  return (
    <animated.div
      style={{
        ...backgroundStyle,
        padding: '30px',
        borderRadius: '12px',
        textAlign: 'center',
        margin: '20px auto',
        maxWidth: '600px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Counter: {count}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Button variant="contained" color="primary" onClick={handleIncrement}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDecrement}>
          Decrement
        </Button>
        <Button variant="outlined" color="error" onClick={handleReset}>
          Reset
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          Filling: {fillPercentage}%
        </Typography>
      </Box>
    </animated.div>
  );
};

export default Counter;