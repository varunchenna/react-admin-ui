import './topbox.scss'
import { topDealUsers } from '../../data'

export default function Topbox() {
  return (
    <div className='topbox'>
      <h1>Top Deals</h1>
      <div className='list'>
        {topDealUsers.map(user =>(
            <div className='listItem' key={user.id}>
                <div className='user'>
                    <img  src={user.img} alt='err'/>
                    <div className='usertext'>
                        <span className='username'>{user.username}</span>
                        <span className='email'>{user.email}</span>
                    </div>
                </div>
                <div className='amount'>{user.amount}</div>
            </div>
        ))}
      </div>
    </div>
  )
}
