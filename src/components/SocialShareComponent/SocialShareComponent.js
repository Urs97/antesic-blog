import React from "react"
import styles from "../SocialShareComponent/SocialShareComponent.module.css"

import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialShareComponent = ({ slug, title, author, hashtags, postImage }) => {
  const data = useStaticQuery(
    graphql`
      query SocialShareQuery {
        site {
          siteMetadata {
            siteUrl
          }
        }
        image: file(relativePath: { eq: "hunters-race.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )

  const siteUrl = data.site.siteMetadata.siteUrl
  const url = `${siteUrl}${slug}`
  const pageTitle = title || "Pričajmo o Novcu"
  const twitterHandle = author || "dantesic"
  const pageHashtags = hashtags || ["financije", "biznis"]
  const pageImage = postImage || data.image.childImageSharp.fluid

  return (
    <section className={styles.wrapper}>
      <h4>Podijelite na društvenim mrežama</h4>
      <section className={styles.icons}>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={`${styles.icon} ${styles.facebook}`}
            icon={["fab", "facebook-square"]}
          />
        </a>
        <a
          href={`https://twitter.com/share?url=${url}&text=${pageTitle}&via=${twitterHandle}&hashtags=${pageHashtags}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={`${styles.icon} ${styles.twitter}`}
            icon={["fab", "twitter"]}
          />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?url=${url}&title=${pageTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={`${styles.icon} ${styles.linkedin}`}
            icon={["fab", "linkedin"]}
          />
        </a>
        <a
          href={`https://pinterest.com/pin/create/bookmarklet/?media=${pageImage}&url=${url}&is_video=false&description=${pageTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={`${styles.icon} ${styles.pinterest}`}
            icon={["fab", "pinterest"]}
          />
        </a>
      </section>
    </section>
  )
}

export default SocialShareComponent
