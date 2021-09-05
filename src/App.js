import { useEffect, useState } from 'react'
import axios from 'axios'

import { Title, Wrapper } from './App.style'
import Card from './components/Card'
import Loader from './components/Loader'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [rates, setRates] = useState({})

  const getRates = async () => {
    const { data } = await axios.get(process.env.REACT_APP_API_URL, {
      headers: {
        'Content-type': 'application/json',
      },
    })
    setRates(data)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    getRates()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Wrapper>
      <Title>Currency Converter App</Title>
      <Card data={rates} />
    </Wrapper>
  )
}

export default App
