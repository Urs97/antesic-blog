import React from "react"
import styles_global from "../../styles/global.module.css"
import styles from "./Contact.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"

const Contact = () => {
  return (
    <section className={styles.wrapper} id="kontakt">
      <p className={styles.subtitle}>Pošaljite upit ili poslovni prijedlog</p>
      <h2>Kontakt</h2>
      <form name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <label>
          Vaše ime (obavezno)
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Vaš Email (obavezno)
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Predmet
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Vaša poruka
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit" className={styles_global.button}>
          Pošalji
        </button>
      </form>
      <section className={styles.contact_info}>
        <h4>Pošaljite upit ili prijedlog</h4>
        <p>
          Ako imate neko pitanje, poslovni prijedlog ili biste htjeli objaviti
          svoj članak na ovom blogu slobodno se javite. Bit će mi zadovoljstvo
          pročitati i odgovoriti Vam što prije.
        </p>
        <h4>Kontakt-podaci</h4>
        <section>
          <div>
            <FontAwesomeIcon icon="phone" />
            <span>+385 95 524 7883</span>
          </div>
          <div>
            <FontAwesomeIcon icon="envelope" />
            <a href="https://antesic.dorian@gmail.com">
              antesic.dorian@gmail.com
            </a>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Contact
