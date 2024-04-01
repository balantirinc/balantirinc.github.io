import { Outlet, useLocation } from 'react-router-dom'

const PathLocation = () => {
  return useLocation().pathname
}

// Here will also contain the nav component(s)
export function Layout() {
  return (
      <main>
        <Outlet />
      </main>
  )
}
