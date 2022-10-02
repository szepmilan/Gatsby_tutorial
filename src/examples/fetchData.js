import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
    {
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

const FetchData = () => {
  const {
    site: {
      info: {title},
    },
  } = useStaticQuery(getData);
  return (
    <div>
      {/*<h2>Name: {data.site.siteMetadata.person.name}</h2>*/
      <h2>site title is: {title}</h2>
      }
      {/*data.site.siteMetadata.complexData.map((item,index)=>{
        return <p key={index}>
          {item.name}:{item.age}
        </p>
      })*/}
    </div>
  )
}

export default FetchData