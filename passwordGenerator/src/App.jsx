import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // useRef 

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str+='0123456789'
    if(charactersAllowed) str+='~`!@#$%^&*()_+-=[]{};:,<.>/?'

    for (let i = 0; i <= length; i++) {
      // pass += str.charAt(Math.floor(Math.random() * str.length))
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charactersAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charactersAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-2 my-6 text-orange-500 bg-gray-700 font-bold'> 
        <h1 className='text-2xl font-bold text-white text-center mt-2'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input 
          type="text" 
          value={password} 
          className='outline-none w-full py-2 px-2 my-3' 
          placeholder='password' 
          readOnly
          ref={passwordRef}
           />

          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              defaultValue={numberAllowed}
              id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
              }} />
              <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultValue={charactersAllowed}
            id="charInput"
            onChange={ () => {
              setCharactersAllowed((prev) =>!prev)
            } } />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>

         </div>
    </>
  )
}

export default App
