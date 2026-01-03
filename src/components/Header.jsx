import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header(){
  const { user, signIn, signOut } = useAuth();
  const navigate = useNavigate();
  const currentLang = localStorage.getItem('selectedLanguage') || 'en';
  const toggleLang = () => {
    const next = currentLang === 'en' ? 'te' : 'en';
    localStorage.setItem('selectedLanguage', next);
    window.location.reload();
  };

  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="hidden md:inline-flex bg-orange-500 text-white px-3 py-1 rounded">← Back</button>
        <h1 className="text-lg font-semibold">🇮🇳 AP Sachivalayam Services</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-3 py-1 border border-orange-500 text-orange-600 rounded font-bold" onClick={toggleLang}>{currentLang === 'en' ? 'తెలుగు' : 'English'}</button>
        {user ? (
          <div className="flex items-center gap-3">
            <div className="text-sm">{user.displayName || user.email}</div>
            <button className="px-3 py-1 border rounded" onClick={() => signOut()}>Sign out</button>
          </div>
        ) : (
          <button className="px-3 py-1 border rounded" onClick={() => signIn()}>Sign in with Google</button>
        )}
      </div>
    </header>
  );
}
