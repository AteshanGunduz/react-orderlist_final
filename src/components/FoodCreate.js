import FoodContext from '@/context/foods'
import { useState, useContext } from 'react'

const FoodCreate = () => {
  const { createFood } = useContext(FoodContext)
  const [title, setTitle] = useState('')
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    createFood(title)
    setTitle('')
  }
  return (
    <div className='food-create'>
      <h3>Sipariş Listesi</h3>
      <form onSubmit={handleSubmit}>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}
export default FoodCreate
