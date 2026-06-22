// declare module 'remoteApp/App';

// declare module 'remoteApp/datashare/stateBridge';


declare module 'remoteApp/App' {
  const Component: any;
  export default Component;
}

// declare module 'remoteApp/datashare/stateBridge' {
//   export const anything: any;
// }

declare module 'remoteApp/datashare/stateBridge' {
  export function getCounterValue(): number;
  export function getCounterValue2(): number;

  export function getToken(): string | null;

  export function subscribeToToken(
    cb: (token: string | null) => void
  ): () => void;
}