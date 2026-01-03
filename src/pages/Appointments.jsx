import React, { useEffect, useState } from 'react';

export default function Appointments(){
  const [appointments, setAppointments] = useState([]);

  useEffect(()=>{
    setAppointments(JSON.parse(localStorage.getItem('appointments')||'[]'));
  },[]);

  function cancel(token){
    if(!confirm('Cancel appointment?')) return;
    const arr = appointments.filter(a => a.token !== token);
    setAppointments(arr);
    localStorage.setItem('appointments', JSON.stringify(arr));
    const lastToken = localStorage.getItem('lastBookedToken');
    if(lastToken===token){
      localStorage.removeItem('lastBookedToken');
      localStorage.removeItem('lastBookedMobile');
      localStorage.removeItem('lastBookedName');
      localStorage.removeItem('lastBookedService');
    }
    alert('Appointment cancelled');
  }

  if (appointments.length===0) return <div className="p-6">📭 No appointments booked yet</div>;
  return (
    <div className="p-6">
      {appointments.slice().reverse().map(a=> (
        <div key={a.token} className="bg-blue-50 p-4 rounded mb-4">
          <h4 className="text-blue-700">🎯 {a.service}</h4>
          <p><strong>Token:</strong> <span className="font-mono text-orange-600">{a.token}</span></p>
          <p><strong>Name:</strong> {a.name}</p>
          <p><strong>Mobile:</strong> {a.mobile}</p>
          <p><strong>Date:</strong> {a.date}</p>
          <p><strong>Time:</strong> {a.time}</p>
          <p><strong>Booked On:</strong> {a.bookedAt}</p>
          <div className="mt-2 flex gap-2">
            <button className="px-3 py-1 border rounded" onClick={()=>cancel(a.token)}>❌ Cancel</button>
          </div>
        </div>
      ))}
    </div>
  );
}
