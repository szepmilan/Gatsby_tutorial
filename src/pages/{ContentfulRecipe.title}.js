import React from 'react'

const RecipeTemplate = props => {
  console.log(props);
  return (
    <h2>{props.params.title}</h2>
  )
}

export default RecipeTemplate