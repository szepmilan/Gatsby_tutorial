import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'
import { graphql,useStaticQuery } from 'gatsby'
export const query = graphql`
  query {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  /*const {
    allContentfulRecipe:{nodes:recipes}
  } = useStaticQuery(query);*/
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;
  //console.log(recipes);
  return (
    <section className='recipes-container'>
      <h4>all recipes</h4>
      <TagsList recipes={recipes}/>
      <RecipesList recipes={recipes}/>
    </section>
  )
}

export default AllRecipes