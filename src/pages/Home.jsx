import React from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from '../utils/i18n';

export default function Home(){
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold">{t('homeTitle')}</h1>
        <p className="text-orange-600 mt-2">{t('homeSubtitle1')}</p>
        <p className="mt-2 text-gray-600">{t('homeSubtitle2')}</p>

        <div className="booking-cta mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
          <h3 className="text-lg">{t('bookAppointmentTitle')}</h3>
          <p className="opacity-90">{t('bookAppointmentDesc')}</p>
          <div className="mt-4">
            <button className="bg-white text-indigo-700 px-4 py-2 rounded" onClick={()=>navigate('/services')}>{t('startBooking')}</button>
          </div>
        </div>

      </div>
    </div>
  );
}
