import { Link, Outlet } from 'react-router-dom'
import HomeIcon from './Icons/HomeIcon'

export default function Layout() {
  return (
    <>
      <div className="fixed top-4 left-4">
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}
