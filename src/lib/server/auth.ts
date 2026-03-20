import crypto from 'crypto';

const SESSION_COOKIE = 'session';
/** 8-hour session – enough for a working day without requiring re-login */
const SESSION_DURATION_HOURS = 8;
const SESSION_MAX_AGE_SECONDS = 60 * 60 * SESSION_DURATION_HOURS;

/**
 * Returns the signing secret, derived from ADMIN_PASSWORD so no extra env var is needed.
 * In production ADMIN_PASSWORD must be set; in dev it falls back to a fixed dev secret.
 */
function getSigningSecret(): string {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error('ADMIN_PASSWORD environment variable is required');
  }
  return secret;
}

/** Create an HMAC-signed session token containing a random nonce. */
function createToken(): string {
  const nonce = crypto.randomBytes(16).toString('hex');
  const hmac = crypto.createHmac('sha256', getSigningSecret()).update(nonce).digest('hex');
  return `${nonce}.${hmac}`;
}

/** Verify the HMAC signature of a session token. */
function verifyToken(token: string): boolean {
  const dot = token.lastIndexOf('.');
  if (dot === -1) return false;
  const nonce = token.slice(0, dot);
  const providedHmac = token.slice(dot + 1);
  const expectedHmac = crypto.createHmac('sha256', getSigningSecret()).update(nonce).digest('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(providedHmac, 'hex'), Buffer.from(expectedHmac, 'hex'));
  } catch {
    return false;
  }
}

export function checkPassword(input: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    throw new Error('ADMIN_PASSWORD environment variable is required');
  }
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
  const token = cookies.get(SESSION_COOKIE);
  return token !== undefined && verifyToken(token);
}

export function setSessionCookie(cookies: { set: (name: string, value: string, opts: object) => void }): void {
  cookies.set(SESSION_COOKIE, createToken(), {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_MAX_AGE_SECONDS
  });
}

export function clearSessionCookie(cookies: { delete: (name: string, opts: object) => void }): void {
  cookies.delete(SESSION_COOKIE, { path: '/' });
}

