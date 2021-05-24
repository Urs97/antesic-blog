import React from "react"
import styles from "./Footer.module.css"

import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "SZSUR.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      <section className={styles.social_section}>
        <h4>Zapratite na društvenim mrežama</h4>
        <a
          href="https://www.linkedin.com/company/pri%C4%8Dajmo-o-novcu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={`${styles.icon} ${styles.linkedin}`}
            icon={["fab", "linkedin"]}
          />
        </a>
        <a
          href="https://www.facebook.com/Pri%C4%8Dajmo-o-novcu-103037651540688"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={`${styles.icon} ${styles.facebook}`}
            icon={["fab", "facebook-square"]}
          />
        </a>
      </section>
      <section className={styles.about_section}>
        <h4>O Blogu</h4>
        <p>
          Blog "Pričajmo o novcu" je financijski blog nastao s misijom
          financijskog opismenjivanja stanovništva kako bi znali donositi bolje
          financijske odluke i time unaprijedili svoj život te stvorili
          bogatstvo za buduće generacije.
        </p>
      </section>
      <section className={styles.nav_section}>
        <h4>Stranice</h4>
        <nav>
          <ul>
            <li>
              <Link to="/">Početna</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/o-meni">O Meni</Link>
            </li>
            <li>
              <Link to="/#kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className={styles.logo_section}>
        <h4>Sufinancirano u sklopu projekta "Dorean Finance" od:</h4>
        <Img
          className={styles.logo}
          fluid={data.image.childImageSharp.fluid}
          alt="Faculty of Rijeka student council logo"
        />
      </section>
      <p className={styles.designer}>Site designed by Urs</p>
    </footer>
  )
}

export default Footer
