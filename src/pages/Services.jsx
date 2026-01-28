import React from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { serviceTitle } from '../utils/i18n';

export default function Services(){
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Select a Service</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.keys(servicesData).map(key => (
          <div key={key} className="bg-white rounded p-4 shadow cursor-pointer hover:scale-105 transition" onClick={()=>navigate(`/details/${key}`)}>
            <div className="text-2xl">{serviceTitle(servicesData[key])}</div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="px-4 py-2 border rounded" onClick={()=>navigate('/')}>← Home</button>
      </div>
    </div>
  );
}
