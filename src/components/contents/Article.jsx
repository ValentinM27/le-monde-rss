import React from 'react'

/**
 * Permet d'afficher le contenu d'un article 
 * @param {*} props 
 * @returns 
 */
const Article = (props) => {
  return (
    <div key={props.item.title}>
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
        <h1>{props.item.link}</h1>
    </div>
  )
}

export default Article