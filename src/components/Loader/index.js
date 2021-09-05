import { ScaleLoader } from 'react-spinners'
import { LoaderWrap } from './Loader.style'

const Loader = () => {
  return (
    <LoaderWrap>
      <ScaleLoader color='#00b5ad' />
    </LoaderWrap>
  )
}

export default Loader
