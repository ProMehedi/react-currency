import ReactDOM from 'react-dom'
import App from './App'
import 'currency-flags/dist/currency-flags.min.css'
import 'semantic-ui-css/semantic.min.css'
import { GlobalStyle } from './App.style'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)
