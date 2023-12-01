import { useState, useEffect } from 'react'
import { useFetch } from './UseFetch'

const url = 'https://api.escuelajs.co/api/v1/products'

const CustomHooks = () => {
  const { loading, products } = useFetch(url)
  console.log(products)
  return (
    <div>
      <h2></h2>
    </div>
  )
}
export default CustomHooks
