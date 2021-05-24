import React from "react"
import styles from "./DesktopNav.module.css"

import { Link } from "gatsby"

const DesktopNav = () => {
  return (
    <header className={styles.wrapper}>
      <Link to="/">
        <h1 className={styles.logo}>antesic.com</h1>
      </Link>
      <nav className={styles.nav}>
        <Link to="/">Početna</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/o-meni">O Meni</Link>
        <Link to="/#kontakt">Kontakt</Link>
      </nav>
    </header>
  )
}

export default DesktopNav
