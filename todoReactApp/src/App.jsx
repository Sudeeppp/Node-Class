import React from 'react'

function App() {
  fetch("http://127.0.0.7:7000/alltasks")
    .then(res => res.json())
    .then(data => console.log(data))  
    .catch(err => console.log(err))
  return (
    <>
      <h1>Integrating with an express Appoooooo</h1>
    </>
  )
}

export default App