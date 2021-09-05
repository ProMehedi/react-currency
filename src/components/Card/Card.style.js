import { Button, Input } from 'semantic-ui-react'
import styled from 'styled-components/macro'

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 30px 20px;
  border-top: 6px solid #00b5ad;
  width: 100%;
`
export const CardHeader = styled.div`
  text-align: center;
  margin: 20px 0;

  h3 {
    font-size: 1rem;
    font-weight: normal;
    margin: 0 0 5px;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0;
  }
`

export const CardBody = styled.div`
  padding: 30px 0;

  label {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
`

export const StyledInput = styled(Input)`
  margin-bottom: 15px;
  width: 100%;
`

export const StyledButton = styled(Button)`
  margin-top: 15px !important;
  width: 100%;
  text-transform: uppercase !important;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 -5px;

  div {
    flex: 1;
    margin: 0 5px;
  }

  .ui.fluid.dropdown {
    margin: 0;
  }
`

export const Icon = styled.span`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 5px;
  margin-top: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
