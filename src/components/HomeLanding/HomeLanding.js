import React from "react"
import styles_global from "../../styles/global.module.css"
import styles from "./HomeLanding.module.css"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link as ScrollLink } from "react-scroll"

const HomeLanding = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "jeremy-beadle.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      desktopImage: file(relativePath: { eq: "hunters-race.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <section className={styles.wrapper}>
      <section className={styles.content}>
        <h1>Pričajmo o novcu</h1>
        <p>Blog o financijama i ekonomiji</p>
        <ScrollLink to="home-about" spy={true} smooth={true}>
          <button className={styles_global.button}>Saznajte više</button>
        </ScrollLink>
      </section>
      <Img
        className={styles.image}
        fluid={sources}
        alt="Photo by Hunters Race/Jeremy Beadle on Unsplash"
      />
    </section>
  )
}

export default HomeLanding
