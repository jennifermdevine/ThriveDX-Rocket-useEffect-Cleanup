import React, { useState } from 'react';
import './App.css';
import RocketLauncher from './RocketLauncher'

function App() {
  let [launch, setLaunch] = useState(true)

  return (
    <main>
      <h1>Learning Cleanup!</h1>
      <button onClick={() => setLaunch(!launch) }>
        { launch ? "Abort Rocket Launch" : "Start Rocket Launch" }
      </button>
      { launch ? <RocketLauncher /> : null }
    </main>
  );
}

export default App;