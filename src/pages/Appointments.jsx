import React, { useEffect, useState } from 'react';
import { t } from '../utils/i18n';

export default function Appointments(){
  const [appointments, setAppointments] = useState([]);

  useEffect(()=>{
    setAppointments(JSON.parse(localStorage.getItem('appointments')||'[]'));
  },[]);

  function cancel(token){
    if(!confirm(t('cancelConfirm'))) return;
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
    alert(t('appointmentCancelled'));
  }

  if (appointments.length===0) return <div className="p-6">{t('noAppointments')}</div>;
  return (
    <div className="p-6">
      {appointments.slice().reverse().map(a=> (
        <div key={a.token} className="bg-blue-50 p-4 rounded mb-4">
          <h4 className="text-blue-700">🎯 {a.service}</h4>
          <p><strong>{t('tokenLabel')}</strong> <span className="font-mono text-orange-600">{a.token}</span></p>
          <p><strong>{t('nameLabel')}</strong> {a.name}</p>
          <p><strong>{t('mobileLabel')}</strong> {a.mobile}</p>
          <p><strong>{t('dateLabel')}</strong> {a.date}</p>
          <p><strong>{t('timeLabel')}</strong> {a.time}</p>
          <p><strong>{t('bookedOn')}</strong> {a.bookedAt}</p>
          <div className="mt-2 flex gap-2">
            <button className="px-3 py-1 border rounded" onClick={()=>cancel(a.token)}>{t('cancelButton')}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
