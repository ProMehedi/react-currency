import { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'

import {
  Card as StyledCard,
  CardBody,
  CardHeader,
  Icon,
  Result,
  Row,
  StyledButton,
  StyledInput,
} from './Card.style'

const Card = ({ data }) => {
  const { rates } = data

  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('BDT')
  const [amount, setAmount] = useState('')
  const [result, setResult] = useState(0)
  const [loading, setLoading] = useState(false)

  // convert Rates object to an array of objects
  const ratesArray = Object.keys(rates).map((key) => ({
    key,
    value: key,
    text: key,
  }))

  const exChangeInput = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(((amount * rates[toCurrency]) / rates[fromCurrency]).toFixed(3))
    if (amount === '') {
      setResult(0)
    }
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }

  // Add Comma to the number
  const addComma = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <StyledCard>
      <CardHeader>
        <h3>Exchange Rate</h3>
        <h1>
          1 {fromCurrency} ={' '}
          {addComma(((1 * rates[toCurrency]) / rates[fromCurrency]).toFixed(3))}{' '}
          {toCurrency}
        </h1>
      </CardHeader>

      <CardBody>
        <form onSubmit={handleSubmit}>
          <label htmlFor='amount'>Amount</label>
          <StyledInput
            type='number'
            id='amount'
            placeholder='Enter Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Row>
            <div>
              <label htmlFor='from'>From</label>
              <Dropdown
                placeholder='Select Country'
                fluid
                search
                selection
                options={ratesArray}
                value={fromCurrency}
                onChange={(e, { value }) => setFromCurrency(value)}
              />
            </div>
            <Icon title='Exhange' onClick={exChangeInput}>
              <img src='exchange-arrows.png' alt='' width='25' />
            </Icon>
            <div>
              <label htmlFor='to'>To</label>
              <Dropdown
                placeholder='Select Country'
                fluid
                search
                selection
                options={ratesArray}
                value={toCurrency}
                onChange={(e, { value }) => setToCurrency(value)}
              />
            </div>
          </Row>
          <StyledButton color='teal' loading={loading}>
            Exchange
          </StyledButton>
        </form>
        {result !== 0 && (
          <Result>
            {toCurrency} {addComma(result)}
          </Result>
        )}
      </CardBody>
    </StyledCard>
  )
}

export default Card
