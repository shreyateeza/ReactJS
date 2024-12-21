// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
// import Counter from './components/Counter'
// import CounterClass from './components/CounterClass'
import SimpleForm from './components/SimpleForm'
import TemperatureDisplay from './components/TemperatureDisplay'
import TemperatureInput from './components/TemperatureInput'
import Router from './components/Router'
function App() {
  //state updation will happen only where the state is defined 
  const [temp,setTemp] = useState('');
  const handleTempChange = (newTemp) => {
    setTemp(newTemp);
  }
  return (
    <div>
      {/* <Counter></Counter> */}
      {/* <CounterClass></CounterClass> */}
      {/* <CounterClass></CounterClass> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <TemperatureInput temp = {temp} handleTempChange = {handleTempChange}></TemperatureInput>
      <TemperatureDisplay temp = {temp}></TemperatureDisplay> */}
      <Router></Router>
    </div>
  )
}

export default App;