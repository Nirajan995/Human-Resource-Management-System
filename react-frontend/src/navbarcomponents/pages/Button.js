import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='login-page'>
      <button className='btn'>Log Out</button>
    </Link>
  );
}