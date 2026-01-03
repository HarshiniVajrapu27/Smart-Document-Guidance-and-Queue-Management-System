import React, { useState } from 'react';
import { generateToken } from '../utils/token';
import { servicesData } from '../data/services';

export default function Officer(){
  const [officer, setOfficer] = useState(JSON.parse(localStorage.getItem('officer')||'null'));
  const [pending, setPending] = useState({ name:'', id:'', mobile:'' });
  const [otp, setOtp] = useState('');
  const [__pendingOtp, set__pendingOtp] = useState(null);

  const sendOtp = ()=>{
    if(!pending.name || !pending.id || !pending.mobile) return alert('Enter name,id,mobile');
    const pin = Math.floor(100000+Math.random()*900000).toString();
    set__pendingOtp(pin);
    alert('Demo OTP: '+pin);
  };
  const verifyOtp = ()=>{
    if(otp===__pendingOtp){
      const acct = { ...pending, verified: true, verifiedAt: new Date().toISOString() };
      localStorage.setItem('officer', JSON.stringify(acct));
      setOfficer(acct);
      set__pendingOtp(null);
      setOtp('');
      alert('Officer verified — access granted');
    } else alert('Incorrect OTP');
  };

  const [form, setForm] = useState({ service:'income', name:'Guest', mobile:'', date: new Date().toISOString().split('T')[0], time:'On demand' });

  function generate(){
    const key = form.service;
    const token = generateToken(form.name);
    const dateObj = new Date(form.date);
    const formatted = dateObj.toLocaleDateString('en-IN', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
    const appointments = JSON.parse(localStorage.getItem('appointments')||'[]');
    const position = appointments.filter(a => a.date===formatted).length + 1;
    const apt = { token, service: servicesData[key].titleEn, name: form.name, mobile: form.mobile, date: formatted, time: form.time, bookedAt: new Date().toLocaleString('en-IN'), position };
    appointments.push(apt);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    localStorage.setItem('lastBookedToken', token);
    localStorage.setItem('lastBookedMobile', form.mobile);
    localStorage.setItem('lastBookedName', form.name);
    localStorage.setItem('lastBookedService', servicesData[key].titleEn);
    alert('Token generated: '+token);
  }

  if(!officer) return (
    <div className="p-6 max-w-lg mx-auto">
      <h3 className="text-xl font-bold">Officer Sign Up / Login</h3>
      <div className="mt-3 space-y-3">
        <input placeholder="Full name" className="w-full p-2 border rounded" value={pending.name} onChange={e=>setPending(p=>({...p,name:e.target.value}))} />
        <input placeholder="Employee ID" className="w-full p-2 border rounded" value={pending.id} onChange={e=>setPending(p=>({...p,id:e.target.value}))} />
        <input placeholder="10-digit mobile" className="w-full p-2 border rounded" value={pending.mobile} onChange={e=>setPending(p=>({...p,mobile:e.target.value}))} />
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={sendOtp}>Send OTP</button>
          <input placeholder="OTP" className="p-2 border rounded" value={otp} onChange={e=>setOtp(e.target.value)} />
          <button className="px-3 py-1 border rounded" onClick={verifyOtp}>Verify</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold">Officer — Generate Token</h3>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="block font-semibold">Service</label>
          <select className="w-full p-2 border rounded" value={form.service} onChange={e=>setForm(f=>({...f,service:e.target.value}))}>
            {Object.keys(servicesData).map(k=> <option key={k} value={k}>{servicesData[k].titleEn}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-semibold">Name</label>
          <input className="w-full p-2 border rounded" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
        </div>
        <div>
          <label className="block font-semibold">Mobile</label>
          <input className="w-full p-2 border rounded" value={form.mobile} onChange={e=>setForm(f=>({...f,mobile:e.target.value}))} />
        </div>
        <div>
          <label className="block font-semibold">Date</label>
          <input type="date" className="w-full p-2 border rounded" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} />
        </div>
        <div>
          <label className="block font-semibold">Time</label>
          <input className="w-full p-2 border rounded" value={form.time} onChange={e=>setForm(f=>({...f,time:e.target.value}))} />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="px-4 py-2 bg-orange-500 text-white rounded" onClick={generate}>Generate Token</button>
        <button className="px-4 py-2 border rounded" onClick={()=>localStorage.removeItem('officer')}>Logout</button>
      </div>
    </div>
  );
}
