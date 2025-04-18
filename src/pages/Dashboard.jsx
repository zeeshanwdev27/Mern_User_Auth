import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';

const Dashboard = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return (window.location.href = '/sign-in');

    fetch('http://localhost:3000/api/dashboard', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message?.startsWith("Welcome")) {
          const nameMatch = data.message.match(/Welcome back, (.+)!/);
          setUserName(nameMatch ? nameMatch[1] : '');
        } else {
          toast.error('Unauthorized. Please sign in.');
          localStorage.removeItem('token');
          window.location.href = '/sign-in';
        }
      })
      .catch(() => {
        toast.error('Error loading dashboard.');
        window.location.href = '/sign-in';
      });
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    toast.success('Signed out successfully!');
    window.location.href = '/sign-in';
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome, {userName} 👋</h1>
      <Button variant="contained" color="error" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default Dashboard;
