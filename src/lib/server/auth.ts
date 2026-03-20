import crypto from 'crypto';

const SESSION_COOKIE = 'session';
const SESSION_VALUE = 'authenticated';

export function checkPassword(input: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'admin123';
  try {
    const a = Buffer.from(input);
    const b = Buffer.from(adminPassword);
    if (a.length !== b.length) {
      // Use timingSafeEqual on padded buffers to avoid length leakage
      const padded = Buffer.alloc(b.length);
      a.copy(padded, 0, 0, Math.min(a.length, b.length));
      crypto.timingSafeEqual(padded, b);
      return false;
    }
    return crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function isAuthenticated(cookies: { get: (name: string) => string | undefined }): boolean {
  return cookies.get(SESSION_COOKIE) === SESSION_VALUE;
}

export function setSessionCookie(cookies: { set: (name: string, value: string, opts: object) => void }): void {
  cookies.set(SESSION_COOKIE, SESSION_VALUE, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 8
  });
}

export function clearSessionCookie(cookies: { delete: (name: string, opts: object) => void }): void {
  cookies.delete(SESSION_COOKIE, { path: '/' });
}
