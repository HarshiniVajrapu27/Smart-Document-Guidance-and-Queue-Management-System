import React, { useEffect, useState } from 'react';
import { t } from '../utils/i18n';

export default function QueueStatus(){
  const [lastToken, setLastToken] = useState(localStorage.getItem('lastBookedToken'));
  const [currentServed, setCurrentServed] = useState(parseInt(localStorage.getItem('currentServedCount')||'0',10));
  const [appointments, setAppointments] = useState([]);

  useEffect(()=>{
    setAppointments(JSON.parse(localStorage.getItem('appointments')||'[]'));
  },[]);

  useEffect(()=>{
    localStorage.setItem('currentServedCount', currentServed);
  },[currentServed]);

  if (!lastToken) return <div className="p-6">{t('noRecentBookings')}</div>;
  const apt = appointments.find(a=>a.token===lastToken);
  const totalForDay = apt ? appointments.filter(a => a.date === apt.date).length : 0;
  const pos = apt ? apt.position : '--';
  const peopleAhead = apt ? Math.max(0, pos - currentServed - 1) : '--';
  const estimatedMinutes = (peopleAhead === '--') ? '--' : (peopleAhead*5);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="user-info-badge bg-blue-50 p-3 rounded">
        <p><strong>{t('userLabel')}</strong> {localStorage.getItem('lastBookedName')||'--'}</p>
        <p><strong>{t('mobileLabel')}</strong> {localStorage.getItem('lastBookedMobile')||'--'}</p>
        <p><strong>{t('serviceLabel')}</strong> {localStorage.getItem('lastBookedService')||'--'}</p>
      </div>

      <div className="queue-info-card bg-white rounded shadow mt-4">
        <div className="queue-current-token bg-orange-500 text-white p-6 rounded-t text-center">
          <p>{t('yourToken')}</p>
          <div className="text-4xl font-mono mt-2">{lastToken}</div>
        </div>
        <div className="p-4">
          <div className="flex justify-between py-2"><span className="font-bold">{t('yourPosition')}</span><span className="text-orange-500">#{pos}</span></div>
          <div className="flex justify-between py-2"><span className="font-bold">{t('peopleAhead')}</span><span>{peopleAhead}</span></div>
          <div className="flex justify-between py-2"><span className="font-bold">{t('estWait')}</span><span className="text-green-600">{estimatedMinutes} mins</span></div>
          <div className="flex justify-between py-2"><span className="font-bold">{t('lastUpdated')}</span><span>{new Date().toLocaleString('en-IN')}</span></div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <label className="font-bold">{t('yourPosition')}</label>
        <input type="number" value={currentServed} onChange={e=>setCurrentServed(parseInt(e.target.value||'0',10)||0)} className="p-1 border rounded w-20" />
        <button className="px-3 py-1 border rounded" onClick={()=>alert(t('updateQueue'))}>{t('updateQueue')}</button>
        <span className="ml-4 text-gray-600">{t('totalToday')} {totalForDay}</span>
      </div>

    </div>
  );
}
