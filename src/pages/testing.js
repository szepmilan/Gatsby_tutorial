import React from 'react'
import {graphql} from 'gatsby'

const Testing = ({data}) => {
  const author = data.site.info.author;
  return (
    <h2>author: {author}</h2>
  )
}

export const data = graphql`
    query {
      site {
        info: siteMetadata {
          title
          description
          author
          simpleData
          person {
            age
            name
          }
          complexData {
            age
            name
          }
        }
      }
    }
`
export default Testing