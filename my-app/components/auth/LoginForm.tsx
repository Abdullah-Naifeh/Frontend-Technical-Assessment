'use client';

import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('demo@user.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) {
      setError('Invalid credentials. Use demo@user.com / password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">⚡ CryptoWatch Sign In</h2>
        
        {error && <div className="p-3 mb-4 text-sm bg-rose-500/10 border border-rose-500 text-rose-400 rounded-lg">{error}</div>}

        <div className="mb-4">
          <label className="block text-sm text-slate-400 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-slate-400 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500"
          />
        </div>

        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 rounded-lg transition-colors">
          Sign In
        </button>
      </form>
    </div>
  );
}