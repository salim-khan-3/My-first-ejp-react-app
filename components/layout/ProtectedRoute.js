// components/layout/ProtectedRoute.js
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; 
    
    // If not logged in, redirect to login page
    if (status === 'unauthenticated') {
      router.push('/login?callbackUrl=' + encodeURIComponent(window.location.pathname));
    }
  }, [status, router]);

  if (status === 'loading' || status === 'unauthenticated') {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-xl text-indigo-600 font-medium">Checking authentication status...</p>
      </div>
    );
  }

  // If authenticated, show the content
  return <>{children}</>;
}