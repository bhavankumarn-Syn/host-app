import { Suspense } from 'react'

import './App.css'

import RemoteAppu from 'remoteApp/App';
import { useRemoteToken } from './hooks/useRemoteToken';


function App() {

  const token = useRemoteToken();

  return (
    <>


     <h1>Parent APP - super - <code> Code Counter - {}</code></h1>
     <p>Bearer token from remote: <code>{token ?? '(none yet)'}</code></p>
     <Suspense fallback={<div>Loading remote module...</div>}>
       <RemoteAppu/>
     </Suspense>
    </>
  )
}

export default App
