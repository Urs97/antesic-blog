import React from "react"
import styles from "../styles/blog.module.css"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import BlogRoll from "../components/BlogRoll/BlogRoll"
import SocialShareComponent from "../components/SocialShareComponent/SocialShareComponent"

const blog = () => {
  const slug = "/blog"

  return (
    <Layout>
      <SEO
        title={"Pričajmo o novcu"}
        description={
          "Edukativni sadržaj o području financija i ekonomije. Zajedno učimo o novcu. Analize, komentari i reakcije."
        }
        slug={slug}
      />
      <section className={styles.blog}>
        <h1>Blog</h1>
        <BlogRoll />
      </section>
      <SocialShareComponent slug={slug} title={"Pričajmo o novcu"} />
    </Layout>
  )
}

export default blog
