import SinglePage from '../../components/SinglePage/SinglePage'
import { singleUser } from '../../data'
import './User.scss'

export default function User() {
  return (
    <div className='user'>
        <SinglePage {...singleUser} />
    </div>
  )
}
