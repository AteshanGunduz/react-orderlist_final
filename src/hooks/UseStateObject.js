import { useState } from 'react'

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'Murat',
  //   age: 37,
  //   text: 'Hello',
  // })

  const [name, setName] = useState('Murat')
  const [age, setAge] = useState(37)
  const [text, setText] = useState('Hello')

  const changeText = () => {
    // setPerson({...person,text:"Hello World"})
    setText('Hello World')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{text}</h3>
      <button onClick={changeText}>Metni Değiştir</button>
    </>
  )
}
export default UseStateObject
