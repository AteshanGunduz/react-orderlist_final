import FoodContext from '@/context/foods'
import FoodShow from './FoodShow'
import { useContext } from 'react'

const FoodList = () => {
  const { foods } = useContext(FoodContext)
  const renderedFoods = foods.map((food) => {
    return <FoodShow key={food.id} food={food} />
  })
  return <div className='food-list'>{renderedFoods}</div>
}
export default FoodList
