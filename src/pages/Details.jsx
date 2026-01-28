import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { t, serviceTitle, serviceList } from '../utils/i18n';
import { generateToken } from '../utils/token';

export default function Details(){
  const { key } = useParams();
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const [showBooking, setShowBooking] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem('appointments')||'[]'));
  const [form, setForm] = useState({ name:'', mobile:'', date: '', time: ''});

  useEffect(()=>{
    const today = new Date().toISOString().split('T')[0];
    setForm(f=>({ ...f, date: today }));
  },[]);

  if (!servicesData[key]) return <div className="p-6">Service not found</div>;
  const data = servicesData[key];
  const list = serviceList(data);

  const toggleCheck = (i) => {
    setChecked(prev => ({ ...prev, [i]: !prev[i]}));
  };
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const total = list.length;
  const percent = total ? Math.round((checkedCount/total)*100) : 0;

  const times = ["09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM"];

  function confirmAppointment(){
    if (!form.name) return alert('Please enter your name');
    if (!form.mobile || form.mobile.length !== 10 || isNaN(form.mobile)) return alert('Please enter valid 10-digit mobile');
    if (!form.date) return alert('Please select a date');
    if (!selectedTime) return alert('Please select a time slot');

    const dateObj = new Date(form.date);
    const formatted = dateObj.toLocaleDateString('en-IN', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
    const position = appointments.filter(a => a.date === formatted).length + 1;
    const token = generateToken(form.name);
    const bookedAt = new Date().toLocaleString('en-IN');
    const serviceName = serviceTitle(data);
    const apt = { token, service: serviceName, name: form.name, mobile: form.mobile, date: formatted, time: selectedTime, bookedAt, position };
    const newList = [...appointments, apt];
    localStorage.setItem('appointments', JSON.stringify(newList));
    localStorage.setItem('lastBookedToken', token);
    localStorage.setItem('lastBookedMobile', form.mobile);
    localStorage.setItem('lastBookedName', form.name);
    localStorage.setItem('lastBookedService', serviceName);
    setAppointments(newList);
    setShowBooking(false);
    navigate('/appointments');
    alert('Appointment confirmed! Token: ' + token);
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl mb-2">{serviceTitle(data)}</h2>
      <p className="text-orange-600 font-bold">{t('requiredDocuments')}</p>

      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
          <div className="bg-green-500 h-4" style={{width: `${percent}%`}}></div>
        </div>
        <p className="mt-2">{percent}% completed</p>
      </div>

      <ul className="mt-4 space-y-2">
        {list.map((item,i)=> (
          <li key={i} className="flex items-center gap-3">
            <input type="checkbox" checked={!!checked[i]} onChange={()=>toggleCheck(i)} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

        {percent === 100 && (
        <div className="mt-4">
          <button className="w-full bg-orange-500 text-white py-2 rounded" onClick={()=>setShowBooking(true)}>{t('proceedToBooking')}</button>
        </div>
      )}

      {showBooking && (
        <div className="mt-6 p-4 bg-blue-50 rounded">
          <h3 className="text-lg text-blue-700">{t('bookAppointmentTitle')}</h3>
          <div className="mt-3 space-y-3">
            <div>
              <label className="block font-semibold">{t('yourName')}</label>
              <input className="w-full p-2 border rounded" value={form.name} onChange={e=>setForm(f=>({...f, name: e.target.value}))} />
            </div>
            <div>
              <label className="block font-semibold">{t('mobileNumber')}</label>
              <input className="w-full p-2 border rounded" value={form.mobile} onChange={e=>setForm(f=>({...f, mobile: e.target.value}))} maxLength={10} />
            </div>
            <div>
              <label className="block font-semibold">{t('selectDate')}</label>
              <input type="date" className="p-2 border rounded w-full" value={form.date} min={new Date().toISOString().split('T')[0]} onChange={e=>setForm(f=>({...f, date: e.target.value}))} />
            </div>
            <div>
              <h4 className="font-semibold">{t('availableSlots')}</h4>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {times.map(t=> (
                  <div key={t} className={`p-2 border rounded text-center cursor-pointer ${selectedTime===t? 'bg-green-500 text-white':'bg-white'}`} onClick={()=>setSelectedTime(t)}>{t}</div>
                ))}
              </div>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded" onClick={confirmAppointment}>{t('confirmGetToken')}</button>
          </div>
        </div>
      )}

      <div className="mt-6">
        <button className="px-4 py-2 border rounded" onClick={()=>navigate('/services')}>{t('backToServices')}</button>
      </div>
    </div>
  );
}
