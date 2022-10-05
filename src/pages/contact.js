import React from 'react'
import Layout from "../components/Layout"
import { /*Link,*/graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import Seo from '../components/SEO'

const Contact = ({data}) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <Seo title="Contact"/>
      <main className='page'>
        <section className='contact-page'>
          <article>
            <h3>Want To Get In Touch?</h3>
            <p>Bodega boys edison bulb helvetica master cleanse fixie +1 shabby chic migas kogi mixtape farm-to-table franzen.</p>
            <p>Readymade quinoa asymmetrical VHS cornhole.</p>
            <p>Sriracha kickstarter ascot occupy you probably haven't heard of them gastropub bitters artisan leggings glossier semiotics jean shorts selvage neutra.</p>
          </article>
          <article>
            <form 
              className='form contact-form'
              action="https://formspree.io/f/xqkjbgrb"
              method="POST"
            >
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
        <section className='featured-recipes'>
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      totalCount
    }
  }
`

export default Contact
