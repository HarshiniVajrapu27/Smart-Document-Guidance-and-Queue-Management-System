import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoleSelect(){
  const navigate = useNavigate();
  const selectCitizen = () => { localStorage.setItem('selectedRole','citizen'); navigate('/'); };
  const selectOfficer = () => { localStorage.setItem('selectedRole','officer'); navigate('/officer'); };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Select Role</h2>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded" onClick={selectCitizen}>Citizen</button>
          <button className="px-6 py-3 border border-orange-400 text-orange-600 rounded" onClick={selectOfficer}>Officer</button>
        </div>
      </div>
    </div>
  );
}
