import { useEffect, useState } from 'react'
import axios from 'axios'

import { Title, Wrapper } from './App.style'
import Card from './components/Card'

const App = () => {
  const [rates, setRates] = useState({})

  const getRates = async () => {
    const { data } = await axios.get(process.env.REACT_APP_API_URL)
    setRates(data)
  }

  useEffect(() => {
    getRates()
  }, [])

  return (
    <Wrapper>
      <Title>Currency Converter App</Title>
      <Card data={rates} />
    </Wrapper>
  )
}

export default App
