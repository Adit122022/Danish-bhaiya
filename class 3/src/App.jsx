import React from 'react'
import { useState } from 'react'

const App = () => {
const [num, setNum] = useState(10)
  const handler = () => {
   setNum(12)
  }
    console.log(num)
  return  <div>   
 <h1> { num }</h1>
 <button onClick={handler}> click</button>
    </div>
  
}

export default App