import UniversalCookie from 'universal-cookie';
import { convertTimestampToDate } from 'utils/date';

const cookie = new UniversalCookie();

export function setUserInfo(data: Auth.User): void {
  cookie.set('userInfo', data, {
    path: '/',
    expires: convertTimestampToDate(getExpireTime()),
  });
}

export function getUserInfo(): Auth.User {
  return cookie.get('userInfo');
}

export function setAccessToken(token: string): void {
  cookie.set('token', token, {
    path: '/',
    expires: convertTimestampToDate(getExpireTime()),
  });
}

export function getAccessToken(): string {
  return cookie.get('token');
}

export function setExpireTime(expireAt: number): void {
  cookie.set('expireAt', expireAt, {
    path: '/',
    expires: convertTimestampToDate(expireAt),
  });
}

function getExpireTime(): number {
  return cookie.get('expireAt');
}

export function isAuthenticated(): boolean {
  const userInfo = getUserInfo();
  const token = getAccessToken();
  return !!userInfo && !!token;
}

export function revokeUser(): void {
  const options = {
    path: '/',
  };
  cookie.remove('userInfo', options);
  cookie.remove('token', options);
  cookie.remove('expireAt', options);
}
