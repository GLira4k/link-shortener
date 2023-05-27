import { useState } from 'react'
import { useShortenUrl } from 'react-shorten-url'
import './App.css'
function App() {

const [linkInput, setLinkInput] = useState('')
const { loading, error, data } = useShortenUrl({linkInput})


function handleLinkInput(e){
  setLinkInput(e.target.value)
}


  return (
    <>
      <h1>Hello World!</h1>
      <input 
      type="text" 
      placeholder='Insira seu link'
      onChange={handleLinkInput}
      />
      
    </>
  )
}

export default App
