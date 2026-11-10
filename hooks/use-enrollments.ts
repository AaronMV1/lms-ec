'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { ENROLLMENTS_CHANGED, getEnrollments } from '@/lib/enrollments';

export function useEnrollments() {
  const { isLoaded, userId } = useAuth();
  const [enrolled, setEnrolled] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;
    const refresh = () => setEnrolled(getEnrollments(userId));
    refresh();
    setReady(true);
    window.addEventListener('storage', refresh);
    window.addEventListener('focus', refresh);
    window.addEventListener(ENROLLMENTS_CHANGED, refresh);
    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener('focus', refresh);
      window.removeEventListener(ENROLLMENTS_CHANGED, refresh);
    };
  }, [isLoaded, userId]);

  return { enrolled: isLoaded && userId ? enrolled : [], ready: ready && isLoaded, userId };
}
