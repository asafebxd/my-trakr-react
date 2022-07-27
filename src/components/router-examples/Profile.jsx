import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const params = useParams();
  console.log('params', params);
  return (
    <div>
      <h1>Parent Profile page {params.id}</h1>
    </div>
  );
}
