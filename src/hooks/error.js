const Error = () => {
  let title = 'Engin'
  const handleClick = () => {
    title = 'Namık'
    console.log(title)
  }
  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleClick}>Başlığı Değiştir</button>
    </>
  )
}
export default Error
