import SinglePage from '../../components/SinglePage/SinglePage'
import { singleProduct } from '../../data'
import './Product.scss'

export default function Product() {
  return (
    <div className='product'>
      <SinglePage {...singleProduct}/>
    </div>
  )
}
