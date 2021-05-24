import React, { useState } from "react"
import styles from "./MobileNav.module.css"

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.wrapper}>
      <section>
        <Link to="/">
          <h1 className={styles.logo}>antesic.com</h1>
        </Link>
        <FontAwesomeIcon
          icon="bars"
          className={`${
            isOpen ? styles.hamburger_menu_clicked : styles.hamburger_menu
          }`}
          onClick={() => setIsOpen(isOpen => !isOpen)}
        />
      </section>
      <nav className={`${isOpen ? styles.nav : styles.collapsed}`}>
        <Link to="/">Početna</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/o-meni">O Meni</Link>
        <Link to="/#kontakt">Kontakt</Link>
      </nav>
    </header>
  )
}

export default MobileNav
