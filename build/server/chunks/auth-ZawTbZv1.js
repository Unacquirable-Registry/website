import crypto from 'crypto';

const SESSION_COOKIE = "session";
const SESSION_VALUE = "authenticated";
function checkPassword(input) {
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";
  try {
    const a = Buffer.from(input);
    const b = Buffer.from(adminPassword);
    if (a.length !== b.length) {
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
function isAuthenticated(cookies) {
  return cookies.get(SESSION_COOKIE) === SESSION_VALUE;
}
function setSessionCookie(cookies) {
  cookies.set(SESSION_COOKIE, SESSION_VALUE, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 8
  });
}
function clearSessionCookie(cookies) {
  cookies.delete(SESSION_COOKIE, { path: "/" });
}

export { checkPassword as a, clearSessionCookie as c, isAuthenticated as i, setSessionCookie as s };
//# sourceMappingURL=auth-ZawTbZv1.js.map
