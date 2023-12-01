import { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  // const handleUpdate = () => {
  //   setValue((p) => p + 1)
  //   setValue((p) => p + 1)
  // }
  const reset = () => {
    setValue(0)
  }
  const increase = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue((pre) => {
        return pre + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Counter</h2>
        <h3>{value}</h3>
        <button onClick={() => setValue((v) => v - 1)}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>Counter-2</h2>
        <h3>{value}</h3>
        <button onClick={increase}>+⏳</button>
      </section>
    </>
  )
}
export default UseStateCounter
