import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Button variant="contained">Text</Button>
       <div className='h-60 w-44 bg-slate-600'>afdsafsdf</div>
    </>
  )
}

export default App
