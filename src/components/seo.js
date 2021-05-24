import React from "react"

import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title, postImg, slug }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
            siteUrl
            social {
              twitter
            }
          }
        }
        defaultImage: file(relativePath: { eq: "hunters-race.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              src
            }
          }
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description
  const defaultImage = data.defaultImage.childImageSharp.fluid.src
  const imgThumbnail = postImg || defaultImage
  const siteUrl = data.site.siteMetadata.siteUrl
  const url = `${siteUrl}${slug}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.author}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: "og:image",
          content: `${siteUrl}${imgThumbnail}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
