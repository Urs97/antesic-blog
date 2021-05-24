import React from "react"
import styles from "../styles/about.module.css"

import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import SocialShareComponent from "../components/SocialShareComponent/SocialShareComponent"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "dorian-antesic.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const slug = "/o-meni"

  return (
    <Layout>
      <SEO
        title={"O Meni"}
        description={
          "Dorian Antešić, pokretač i urednik bloga “Pričajmo o novcu”. Učimo o novcu kako bi stvorili bogatstvo za buduće generacije."
        }
        slug={slug}
      />
      <h1 className={styles.title}>O meni</h1>
      <section className={styles.about}>
        <Img
          className={styles.image}
          fluid={data.image.childImageSharp.fluid}
          alt="Dorian Antesic smiling facial portrait"
        />
        <h4>
          <i>I am the master of my fate, I am the captain of my soul.</i>
        </h4>
        <p>Stih po kojem vodim život.</p>
        <p>
          Dobrodošli na blog Pričajmo o novcu. Dođite otvorenog uma sa željom za
          napretkom.
        </p>
        <h4>O meni</h4>
        <p>
          Moje je ime Dorian Antešić, student sam posljednje godine diplomskog
          studija Financija i bankarstva na Ekonomskom fakultetu u Rijeci.
          Financije i poslovanje su dva područja interesa koja me intrgiraju i
          kojima se bavim.
        </p>
        <p>
          Više na mom &nbsp;
          <a
            href="https://www.linkedin.com/in/dorianantesic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn profilu
          </a>{" "}
          i &nbsp;
          <a
            href="https://www.facebook.com/pages/category/Finance/Pri%C4%8Dajmo-o-novcu-103037651540688/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook stranici bloga
          </a>
          .
        </p>
        <h4>Kratki prikaz dosadašnjih postignuća:</h4>
        <ul>
          <li>
            <a
              href="https://www.vecernji.hr/vijesti/osmislio-investicijski-fond-kojim-bi-upravljali-studenti-i-tako-ucili-o-ulaganju-1367189"
              target="_blank"
              rel="noopener noreferrer"
            >
              pobijedio na studentskom natjecanju za razvojne projekte “Hrvatska
              pamet Hrvatskoj”
            </a>{" "}
            u kategoriji Financijaš kojemu je sponzor bio poznati AZ mirovinski
            fond
          </li>
          <li>
            <a
              href="https://www.fiuman.hr/veliki-interes-studenata-za-konferenciju-o-marketingu-i-prodaji-sell-me-this-pen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              stvorio, vodio i organizirao rasprodanu konferenciju
            </a>{" "}
            o marketing “Sell me this pen”
          </li>
          <li>
            kao Potpredsjednik za poslovni razvoj i financije u AIESEC Rijeci
            uspješno sa svojim timom ostvario rast proračuna za 50% te{" "}
            <a
              href="https://lider.media/aktualno/erste-banka-treci-put-potpisala-ugovor-o-suradnji-s-aiesec-om-28345"
              target="_blank"
              rel="noopener noreferrer"
            >
              potpisana partnerstva za više od 200%
            </a>
          </li>
          <li>
            <a
              href="https://www.total-croatia-news.com/news/45332-young-entrepreneurs-created-a-website-to-provide-finance-advices-to-students"
              target="_blank"
              rel="noopener noreferrer"
            >
              napisao planove i ostvario financiranje
            </a>{" "}
            za više od 5 projekta
          </li>
        </ul>
        <Link to="/zasto-je-nastao-blog-pricajmo-o-novcu">
          <h4>Zašto je nastao ovaj blog?</h4>
        </Link>
        <p>
          Covid-19 kriza uzrokovala je ekonomske probleme po cijelom svijetu.
          Mnogo radnih mjesta će biti izgubljeno i financijski problemi mnogima
          će postati neizbježna realnost. Sada je više nego ikada potrebno da se
          ljudi uključe u financijski svijet i da shvate kako radi novac kako bi
          i oni mogli prosperitati.
        </p>
        <p>
          Blog Pričajmo o novcu je osmišljen tako da što više ljudi surađuje na
          njemu kako bi se stvorila kultura pričanja o financijama i stvaranju
          bogatstva kao iznimno pozitivne stvari.
        </p>
        <p>
          Bavit ćemo se većinom financijskim temama, ekonomijom, istraživat ćemo
          financijsku industriju u Hrvatskoj, pričati s ljudima u njoj, kako se
          prilagođavaju tržištu, ali i o samim poslovima unutar financija.
        </p>
        <p>
          Blog je financijski podržao Studentski zbor Sveučilišta u Rijeci u
          sklopu projekta “Dorean Finance” za financijsko opismenjivanje
          stanovništva.
        </p>
        <h4>Izjava o odricanju odgovornosti:</h4>
        <p>
          Teme koje će biti obrađene na ovom blogu napisane su u dobroj namjeri,
          ali ne preuzimam nikakvu pravnu odgovornost za postupke koje čitatelji
          naprave s dobivenim informacijama. Čitatelji trebaju samostalno
          zaključivati i preuzeti odgovornost za vlastite postupke. Materijale
          na ovom blogu su edukativne prirode te ih se kao takve treba i
          uzimati.
        </p>
        <p className={styles.last_element}>
          Mišljenja izražena na ovom blogu su mišljanja autora i ne izražavaju
          nužno stajalište Studentskog zbora Sveučilišta u Rijeci.
        </p>
      </section>
      <SocialShareComponent slug={slug} title={"O Meni"} />
    </Layout>
  )
}

export default About
