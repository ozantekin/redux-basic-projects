import './navbar.styles.css'
import { useSelector } from 'react-redux'
import { loginHandle, logoutHandle } from '../../utils'

export default function Navbar() {
  const { user } = useSelector((state) => state.auth)
  // const user = userSelector(state => state.auth.user)

  const login = (profile) => {
    // dispatch(login(profile))
    loginHandle(profile)
  }
  const logout = () => {
    //dispatch(logout())
    logoutHandle()
  }
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2> Simple To Do List Project with Redux Toolkit</h2>
      </div>
      {!user && (
        <div className='login-button'>
          <button onClick={() => login({ id: 1, account: 'Guest' })}>
            Login as Guest
          </button>
          <button onClick={() => login({ id: 2, account: 'Admin' })}>
            Login as Admin
          </button>
        </div>
      )}
      {user && (
        <div className='logout-button'>
          <h4>Hi! {user.account}</h4>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  )
}
