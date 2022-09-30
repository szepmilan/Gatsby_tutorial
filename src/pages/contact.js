import React from 'react'
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article>
            <h3>Want To Get In Touch?</h3>
            <p>Bodega boys edison bulb helvetica master cleanse fixie +1 shabby chic migas kogi mixtape farm-to-table franzen.</p>
            <p>Readymade quinoa asymmetrical VHS cornhole.</p>
            <p>Sriracha kickstarter ascot occupy you probably haven't heard of them gastropub bitters artisan leggings glossier semiotics jean shorts selvage neutra.</p>
          </article>
          <article>
            <form className='form contact-form'>
              <div className='form-row'>
                <label htmlFor='name'>your name</label>
                <input type="text" name="name" id="name"></input>
              </div>
              <div className='form-row'>
                <label htmlFor='email'>your email</label>
                <input type="text" name="email" id="email"></input>
              </div>
              <div className='form-row'>
                <label htmlFor='message'>message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type='submit' className='btn block'>
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
