import FoodContext from '@/context/foods'
import { useState, useContext } from 'react'

const FoodEdit = ({ food, onSubmit }) => {
  const [title, setTitle] = useState(food.title)
  const { editFoodById } = useContext(FoodContext)
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
    editFoodById(food.id, title)
  }
  return (
    <form className='food-edit' onSubmit={handleSubmit}>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button'>Save</button>
    </form>
  )
}
export default FoodEdit
