import React from 'react'
import setupTags from '../utils/setupTags';

const TagsList = ({recipes}) => {
  console.log(recipes);
  const newTags = setupTags(recipes);
  return (
    <div>this is taglist</div>
  )
}

export default TagsList