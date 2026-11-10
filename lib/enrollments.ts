/** Demo-only enrollments, stored per Clerk user in this browser. */
export const enrollmentKey = (userId: string) => `lms-enrolled:${userId}`;
export const ENROLLMENTS_CHANGED = 'lms-enrollments-changed';

export function getEnrollments(userId: string | null | undefined): string[] {
  if (!userId || typeof window === 'undefined') return [];
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(enrollmentKey(userId)) || '[]');
    return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

export function addEnrollment(userId: string, courseId: string): void {
  const ids = [...new Set([...getEnrollments(userId), courseId])];
  window.localStorage.setItem(enrollmentKey(userId), JSON.stringify(ids));
  window.dispatchEvent(new Event(ENROLLMENTS_CHANGED));
}
