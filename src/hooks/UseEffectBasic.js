import { useEffect, useState } from 'react'

const UseEffectBasic = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('useEffect çalıştırıldı')
    if (value >= 1) {
      document.title = `Yeni mesajlar(${value})`
    }
  }, [value])

  console.log('Bileşen render edlidi')
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue((pre) => pre + 1)}>Tıklayın</button>
    </>
  )
}
export default UseEffectBasic
