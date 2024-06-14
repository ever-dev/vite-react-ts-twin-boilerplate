import { useState } from 'react';

import ReactLogo from '~/assets/react.svg';
import ViteLogo from '~/assets/vite.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <ViteLogo />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <ReactLogo />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button role="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
