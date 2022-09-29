import React from 'react'
import Layout from "../components/Layout"
import * as aboutStyles from '../examples/about.module.css'

const about = () => {
  return (
    <Layout>
      <div className={aboutStyles.page}>
        <h1>about page</h1>
        <h1>hello world</h1>
        <p className={aboutStyles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </Layout>
  )
}

export default about