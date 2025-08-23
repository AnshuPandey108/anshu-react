import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
    const [count, setCount] = useState(0)
    let age=18;

    return (
        <>
            <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
            <Card channel="Anshu Pandey" age={age}/>
            


        </>
    )
}

export default App
