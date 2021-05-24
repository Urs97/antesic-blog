import React from "react"
import styles from "../styles/blogPost.module.css"

import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import SocialShareComponent from "../components/SocialShareComponent/SocialShareComponent"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const slug = post.fields.slug
  const postTitle = post.frontmatter.title
  const postImg = post.frontmatter.thumbnail.childImageSharp.fluid
  const postImgSrc = postImg.src

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        postImg={postImgSrc}
        slug={slug}
      />
      <article className={styles.article}>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p className={styles.date}>{post.frontmatter.date}</p>
          <p className={styles.author}>{post.frontmatter.author}</p>
          <Img
            className={styles.image}
            fluid={postImg}
            alt={`Photo by ${post.frontmatter.thumbnailAuthor} on Unsplash`}
          />
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* Article footer to be added */}
      </article>
      <SocialShareComponent
        slug={slug}
        title={postTitle}
        author={post.frontmatter.author}
        hashtags={post.frontmatter.hashtags}
        postImage={postImgSrc}
      />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      html
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
    }
  }
`
