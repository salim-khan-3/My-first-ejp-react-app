// app/login/page.js
'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/'); // Redirect to home after successful login
    }
  }, [status, router]);

  const handleCredentialLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result.error) {
      setError("Authentication failed: Invalid Email or Password.");
    } 
  };
  
  if (status === 'authenticated' || status === 'loading') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <p className="text-lg text-indigo-600 animate-pulse">Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-xl rounded-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900">Sign In</h2>
        
        <button className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition">
          Sign in with Google (UI Only)
        </button>

        <div className="relative"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div><div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or email</span></div></div>

        <form onSubmit={handleCredentialLogin} className="space-y-6">
          {error && (
            <div className="p-3 text-sm font-medium text-red-700 bg-red-100 rounded-lg border border-red-300">{error}</div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>

          <button
            type="submit"
            className="w-full btn-primary flex justify-center items-center"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <p className="text-center text-sm text-gray-600">
          Test Credentials: <strong>user@example.com</strong> / <strong>password</strong>
        </p>
        <p className="text-center text-sm text-gray-600">
          Don't have an account? <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Register (UI Only)</Link>
        </p>
      </div>
    </div>
  );
}