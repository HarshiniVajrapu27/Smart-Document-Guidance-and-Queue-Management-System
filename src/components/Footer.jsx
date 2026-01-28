import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '../utils/i18n';

export default function Footer(){
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around text-sm">
      <Link to="/">{t('homeTitle')}</Link>
      <Link to="/services">{t('startBooking')}</Link>
      <Link to="/appointments">{t('noAppointments')}</Link>
      <Link to="/queue">{t('yourToken')}</Link>
    </footer>
  );
}
