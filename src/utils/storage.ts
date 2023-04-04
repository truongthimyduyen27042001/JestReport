function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    return undefined;
  }
}

export function setSessionStorage<T>(key: string, value: T): void {
  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }
}

export function setLocalStorage<T>(key: string, value: T): void {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}

export function getSessionStorage<T>(key: string): T | null {
  if (typeof window !== 'undefined') {
    const value = window.sessionStorage.getItem(key);
    try {
      if (value) {
        return parseJSON(value);
      }
      return value as unknown as T;
    } catch (e) {
      // handle error
    }
    return value as unknown as T;
  }
  return null;
}

export function getLocalStorage<T>(key: string): T | null {
  if (typeof window !== 'undefined') {
    const value = window.localStorage.getItem(key);
    try {
      if (value) {
        return parseJSON(value);
      }
      return value as unknown as T;
    } catch (e) {
      // handle error
    }
    return value as unknown as T;
  }
  return null;
}

export function removeSessionStorage(key: string): void {
  if (typeof window !== 'undefined') {
    window.sessionStorage.removeItem(key);
  }
}

export function removeLocalStorage(key: string): void {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(key);
  }
}

export function clearAllSessionStorage(): void {
  if (typeof window !== 'undefined') {
    window.sessionStorage.clear();
  }
}

export function clearAllLocalStorage(): void {
  if (typeof window !== 'undefined') {
    window.localStorage.clear();
  }
}
