'use client';

import { useAuth } from '../context/AuthContext';
import { LoginForm } from '../components/auth/LoginForm';
import { Dashboard } from '../components/Dashboard/Dashboard';

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return <Dashboard />;
}