import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, onAuthStateChanged, signInWithGoogle as _signInWithGoogle, signOut as _signOut } from '../firebase';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u) {
        u.getIdToken().then(token => { window.FIREBASE_ID_TOKEN = token; }).catch(() => {});
      } else {
        window.FIREBASE_ID_TOKEN = null;
      }
    });
    return () => unsub();
  }, []);

  const signIn = () => _signInWithGoogle();
  const signOut = () => _signOut();

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
