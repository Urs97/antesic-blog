import React from "react"
import styles_global from "../../styles/global.module.css"
import styles from "./HomeBlogRoll.module.css"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const HomeBlogRoll = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY", locale: "hr")
              author
              description
              thumbnail {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              thumbnailAuthor
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <section className={styles.wrapper}>
      <p className={styles.subtitle}>Analize, komentari i reakcije</p>
      <h2>Najnovije s bloga</h2>
      <hr />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <section key={node.id} className={styles.blog_post}>
          <Link to={node.fields.slug} className={styles.blog_roll_img_parent}>
            <Img
              className={styles.blog_roll_img}
              fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
              alt={`Photo by ${node.frontmatter.thumbnailAuthor} on Unsplash`}
            />
          </Link>
          <p className={styles.author}>{node.frontmatter.author}</p>
          <p className={styles.date}>
            <i>{node.frontmatter.date}</i>
          </p>
          <Link to={node.fields.slug} className={styles.title_link}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p className={styles.description}>{node.frontmatter.description}</p>
          <hr />
        </section>
      ))}
      <Link
        to="/blog"
        id="blog_roll_btn"
        className={`${styles_global.button} ${styles.button}`}
      >
        Saznajte više
      </Link>
    </section>
  )
}

export default HomeBlogRoll
