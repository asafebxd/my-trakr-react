import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
  const params = useParams();
  console.log('params', params);
  return (
    <div>
      <h1>Child Page - User: {params.id}</h1>
    </div>
  );
}
