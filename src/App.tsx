import './App.css'
import  Three  from './Three'


function App() {

  return (
    <div className="app-shell">
      <h1>Interactive Cube</h1>
      <div className="canvas-wrapper">
        <Three />
      </div>
    </div>
  )
}

export default App
