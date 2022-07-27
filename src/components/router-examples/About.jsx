import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About page</h1>
      <button onClick={() => navigate('/')}>Go back to Home page</button>
    </div>
  );
}
