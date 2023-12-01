import { useState } from 'react'

const UseStateBasic = () => {
  // console.log(useState('hello world'))
  // const state = useState(1)[0] //[1,f]
  // const setterFunction = useState(1)[1] //[1,f]
  // console.log(state, setterFunction)
  const [text, setText] = useState('Engin') //["Engin",f]
  const handleClick = () => {
    if (text === 'Engin') {
      setText('Namık')
    } else {
      setText('Engin')
    }
  }
  return (
    <>
      <h1>{text}</h1>
      <button onClick={handleClick}>Değiştir</button>
    </>
  )
}
export default UseStateBasic
