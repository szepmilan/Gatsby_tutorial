import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
//import { GatsbyImage } from 'gatsby-plugin-image'

export const query = graphql`
  query {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: true}
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query);
  console.log(data);
  return (
    <div>
      <h2>simple image gallery</h2>
    </div>
  )
}

export default Gallery