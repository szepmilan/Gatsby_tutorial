import React from 'react'
import { graphql } from 'gatsby';
const RecipeTemplate = props => {
  console.log(props);
  return (
    <h2>{props.params.title}</h2>
  )
}

export const query =graphql`
  query getSingleRecipe($title: String) {
      contentfulRecipe(title: {eq: $title}) {
      title
      cookTime
    }
  }
`

export default RecipeTemplate