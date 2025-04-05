
// export default userLayout
import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const UserLayout = () => {
  const location = useLocation()

  // List of paths where Footer should NOT show
  const noFooterRoutes = ['/checkout']

  const hideFooter = noFooterRoutes.includes(location.pathname)

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer (conditionally rendered) */}
      {!hideFooter && <Footer />}
    </>
  )
}

export default UserLayout
