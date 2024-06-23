import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const addValue = () => {
    if(count<=19){
      setCount(prevCount => prevCount+1)
      setCount(prevCount => prevCount+1)
      setCount(prevCount => prevCount+1)
      setCount(prevCount => prevCount+1)

      // setCount(count + 1)
      // setCount(count + 1)
      // setCount(count + 1)
      // setCount(count + 1)



    }
  }

  const subtractValue = () => {
    if(count>=1){
      setCount(count-1)
  }
  }



  return (
    <>
    <h3>Counter App</h3>
    <br />
    <h1>Count value: {count}</h1>
    <br />
    <button onClick={addValue}>Add</button>
    <br />
    <button onClick={subtractValue}>Subtract</button>
     </> 
  )
}

export default App
