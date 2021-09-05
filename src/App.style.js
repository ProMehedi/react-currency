import styled, { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
    font-family: 'Roboto', sans-serif;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: bold;
`

export const Wrapper = styled.section`
  max-width: 400px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 556px) {
    max-width: 90%;
  }
`
