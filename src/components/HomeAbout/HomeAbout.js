import React from "react"
import styles from "./HomeAbout.module.css"

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Element as ScrollElement } from "react-scroll"

const HomeAbout = () => {
  return (
    <ScrollElement name="home-about" className={styles.scroll_container}>
      <h2 className={styles.title}>
        Učimo o novcu kako bi stvorili bogatstvo za buduće generacije
      </h2>
      <Link
        to="/zasto-je-nastao-blog-pricajmo-o-novcu"
        className={styles.subtitle_link}
      >
        <p className={styles.subtitle}>Zašto je nastao ovaj blog?</p>
      </Link>
      <span className={styles.icon_wrapper}>
        <FontAwesomeIcon className={styles.icon} icon="dharmachakra" />
      </span>
      <p className={`${styles.subtitle} ${styles.subtitle_bold}`}>
        Kako bi ljudi znali donijeti najbolje financijske odluke u vrijeme krize
        i osigurali si blagostanje.
      </p>
      <section className={styles.wrapper}>
        <section className={styles.section}>
          <span className={styles.icon_wrapper}>
            <FontAwesomeIcon
              className={styles.icon}
              icon="hand-holding-heart"
            />
          </span>
          <h2>Misija</h2>
          <p>
            Financijsko opismenjavanje stanovništva kako bi znali donositi bolje
            financijske odluke i time unaprijedili svoj život te stvorili
            bogatstvo za buduće generacije.
          </p>
        </section>
        <section className={styles.section}>
          <span className={styles.icon_wrapper}>
            <FontAwesomeIcon className={styles.icon} icon="chart-line" />
          </span>
          <h2>Vizija</h2>
          <p className={styles.last_element}>
            Uključiti sve građane Hrvatske u svijet ulaganja.
          </p>
        </section>
      </section>
    </ScrollElement>
  )
}

export default HomeAbout
