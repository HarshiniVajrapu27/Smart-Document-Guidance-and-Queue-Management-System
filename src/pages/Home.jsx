import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold">Sachivalayam Services</h1>
        <p className="text-orange-600 mt-2">Easy access to village services</p>
        <p className="mt-2 text-gray-600">All government services in one place</p>

        <div className="booking-cta mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
          <h3 className="text-lg">📅 Book an Appointment</h3>
          <p className="opacity-90">Select a service and book your appointment with available time slots</p>
          <div className="mt-4">
            <button className="bg-white text-indigo-700 px-4 py-2 rounded" onClick={()=>navigate('/services')}>Start Booking →</button>
          </div>
        </div>

      </div>
    </div>
  );
}
