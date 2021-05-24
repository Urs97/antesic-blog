import React from "react"

import MobileNav from "../MobileNav/MobileNav"
import DesktopNav from "../DesktopNav/DesktopNav"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <MobileNav />
      <DesktopNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
