import { useState } from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  return (
    <>
      <h1>{text || 'murat'}</h1>
      <button onClick={() => setIsError((s) => !s)}>Toggle Error</button>
      {isError ? (
        <p>Hata var...</p>
      ) : (
        <div>
          <h2>Hata yok</h2>
        </div>
      )}
    </>
  )
}
export default ShortCircuit
