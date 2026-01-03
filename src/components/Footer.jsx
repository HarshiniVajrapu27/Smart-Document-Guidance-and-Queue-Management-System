import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around text-sm">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/appointments">Appointments</Link>
      <Link to="/queue">Queue Status</Link>
    </footer>
  );
}
