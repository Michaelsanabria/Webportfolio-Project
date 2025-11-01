import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Video from './Video.jsx'

// will use this original template to learn react and modify it as I progress with this project.
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* headers are written using "<h> and ending </h>" the same concept as used in HTML */}
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* text is written using "<p> and ending </p>" the same concept as used in HTML */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Experimental section */}
      <Video src="https://youtu.be/EPH23zhPg50?si=NP8WM5opo1MMN0_t" />
    </>
  )
}

export default App
