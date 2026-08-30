'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import Icon from '@/components/ui/AppIcon';

export default function NotFound() {
  const router = useRouter();
  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    if (isLoaded) {
      if (userId) {
        router.replace('/');
      } else {
        router.replace('/sign-in');
      }
    }
  }, [isLoaded, userId, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <h1 className="text-9xl font-bold text-primary opacity-20">...</h1>
          </div>
        </div>
        <h2 className="text-2xl font-medium text-onBackground mb-2">Redirecting...</h2>
      </div>
    </div>
  );
}
