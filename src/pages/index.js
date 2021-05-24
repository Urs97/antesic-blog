import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import HomeLanding from "../components/HomeLanding/HomeLanding"
import HomeAbout from "../components/HomeAbout/HomeAbout"
import HomeBlogRoll from "../components/HomeBlogRoll/HomeBlogRoll"
import Contact from "../components/Contact/Contact"
import SocialShareComponent from "../components/SocialShareComponent/SocialShareComponent"

const Home = () => {
  const slug = ""

  return (
    <Layout>
      <SEO
        title={"Pričajmo o novcu"}
        description={
          "Učimo o novcu kako bi stvorili bogatstvo za buduće generacije. Blog o financijama i ekonomiji. Edukativni sadržaj o ulaganju i osobnim financijama."
        }
        slug={slug}
      />
      <HomeLanding />
      <HomeAbout />
      <HomeBlogRoll />
      <Contact />
      <SocialShareComponent slug={slug} title={"Pričajmo o novcu"} />
    </Layout>
  )
}

export default Home
