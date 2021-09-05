import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [rates, setRates] = useState({})

  const getRates = async () => {
    const { data } = await axios.get(process.env.REACT_APP_API_URL)
    setRates(data)
  }

  useEffect(() => {
    getRates()
  }, [])

  console.log(rates)

  return (
    <div>
      <h1>Ready to go</h1>
    </div>
  )
}

export default App
