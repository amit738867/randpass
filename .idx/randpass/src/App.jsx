import { useCallback, useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("amit")

  const passGen = useCallback(()=>{
    let temp = ""
    let str = "ABCD"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      temp += str.charAt(char) 
    }


    setPass(temp)
  }, [length, number, char])

  useEffect(() => {
    passGen()
  }, [length, number, char])

  const copyP = useCallback(() => {
    window.navigator.clipboard.writeText(pass)
  }, [pass])


  return (
   <div  className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
     <h1 className='text-white text-3xl font-[300] text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input id='main' type="text"  value={pass} readOnly className="outline-none w-full py-1 px-3" placeholder='Password'/>
      <button onClick={copyP}  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
    </div>

    <div className='flex flex-wrap text-sm gap-x-2'>
    <input type="range" name="" id="" min={8} max={100} value={length} onChange={(e)=>setLength(e.target.value)}/>
    <span> Length : {length}</span>
    <input   type="checkbox"
          defaultChecked={number} id="numberInput"
          onChange={() => {
              setNumber(!number);
          }}/> Number
    <input type="checkbox"
          defaultChecked={char} id="numberInput"
          onChange={() => {
              setChar(!char);
          }} /> Special
    </div>

          <button onClick={passGen}>click me</button>
    
   
   </div>
  )
}

export default App
