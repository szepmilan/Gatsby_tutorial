import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/SEO"
//import FetchData from '../examples/fetchData'

export default function Home() {
  return (
    <Layout>
      <Seo title="Home Page" description="this is home page"/>
      <main className="page">
        <header className="hero">
          <StaticImage 
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
            as="article"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes/>
      </main>
    </Layout>
  )
}
