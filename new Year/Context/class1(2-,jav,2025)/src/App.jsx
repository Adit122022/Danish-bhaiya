import React from 'react'
import Nav from './Components/Nav'
import Page1 from './Components/Page1'

const App = () => {
  const data =[
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div>
      <Nav data={data}/>
      <Page1 data={data}/>
    </div>
  )
}

export default App