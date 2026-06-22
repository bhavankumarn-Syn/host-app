import { useEffect, useState } from 'react';
// Resolved at runtime via Module Federation; types via the `remoteApp/*` path alias.
import { subscribeToToken } from 'remoteApp/datashare/stateBridge';

/**
 * Subscribes to the bearer token owned by the remote app's Redux store.
 * Returns the current token (null before login) and re-renders on change.
 */
export function useRemoteToken(): string | null {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // subscribeToToken fires immediately with the current value, then on updates.
    const unsubscribe = subscribeToToken(setToken);
    return unsubscribe;
  }, []);

  return token;
}
