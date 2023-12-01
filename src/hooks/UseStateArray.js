import { useState } from 'react'

const peopleData = [
  { id: 1, name: 'Murat' },
  { id: 2, name: 'Namık' },
  { id: 3, name: 'Suzan' },
  { id: 4, name: 'Eda' },
]

const UseStateArray = () => {
  const [people, setPeople] = useState(peopleData)
  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id)
    setPeople(newPerson)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button onClick={() => removePerson(id)}>Kaldır</button>
          </div>
        )
      })}
      <button onClick={() => setPeople([])}>Sil</button>
    </>
  )
}
export default UseStateArray
