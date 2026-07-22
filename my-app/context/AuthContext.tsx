'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { name: string } | null;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  // Sync session on initial browser load
  useEffect(() => {
    const savedSession = localStorage.getItem('auth_session');
    if (savedSession === 'true') {
      setIsAuthenticated(true);
      setUser({ name: 'Demo User' });
    }
  }, []);

  const login = (email: string, pass: string) => {
    // Simple mock credential check
    if (email === 'demo@user.com' && pass === 'password') {
      setIsAuthenticated(true);
      setUser({ name: 'Demo User' });
      localStorage.setItem('auth_session', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('auth_session');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}