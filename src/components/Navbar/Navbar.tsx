import './Navbar.scss'

const  Navbar = ()=> {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo.svg' alt='' />
        <span>landmin</span>
      </div>
      <div className='icons'>
        <img src='/search.svg' alt='' className='icon'/>
        <img src='/app.svg' alt='' className='icon' />
        <img src='/expand.svg' alt='' className='icon' />
        <div className='notification'>
          <img src='/notifications.svg' />
          <span>1</span>
        </div>
        <div className='user'>
          <img src='/profile.webp' />
          <span>Jane</span>
        </div>
        <img src='/settings.svg' alt='' className='icon' />
      </div>
    </div>
  )
}

export default Navbar