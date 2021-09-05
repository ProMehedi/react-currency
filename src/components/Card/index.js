import { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'

import {
  Card as StyledCard,
  CardBody,
  CardHeader,
  Icon,
  Row,
  StyledButton,
  StyledInput,
} from './Card.style'

const Card = ({ data }) => {
  const { rates } = data

  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('EUR')
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState(rates[data.base])
  const [fromResult, setFromResult] = useState(0)
  const [toResult, setToResult] = useState(0)
  const [result, setResult] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // convert Rates object to an array of objects
  const ratesArray = Object.keys(rates).map((key) => ({
    key,
    value: key,
    text: key,
  }))

  const exChangeInput = () => {
    setFrom(to)
    setTo(from)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    setRate(rates[to])
    setFromResult(amount * rates[from])
    setToResult(amount * rates[to])
    setResult(((amount * rates[to]) / rates[from]).toFixed(3))
    setLoading(false)
    console.log(rates[data.base])
    console.log(data.base)
    console.log('Amount:', amount, 'Rate:', rate, 'result:', result)
  }

  return (
    <StyledCard>
      <CardHeader>
        <h3>Exchange Rate</h3>
        <h1>
          1 {from} = {((1 * rates[to]) / rates[from]).toFixed(3)} {to}
        </h1>
        <h4>
          {to} {result}
        </h4>
      </CardHeader>

      <CardBody>
        <label htmlFor='amount'>Amount</label>
        <StyledInput
          type='number'
          id='amount'
          placeholder='Enter Amount'
          min='1'
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
              value={from}
              onChange={(e, { value }) => setFrom(value)}
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
              value={to}
              onChange={(e, { value }) => setTo(value)}
            />
          </div>
        </Row>
        <StyledButton onClick={handleSubmit} color='teal'>
          Convert
        </StyledButton>
      </CardBody>
    </StyledCard>
  )
}

export default Card
