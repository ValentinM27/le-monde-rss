import React from 'react';
import './Article.scss';

/**
 * Permet d'afficher le contenu d'un article 
 * @param {*} props 
 * @returns 
 */
const Article = (props) => {

  return (
    <div className="article-container" key={props.item.title}>
      
      <h2>{props.item.title}</h2>
      <img src={props.item.urlImage} alt="Illustration" />
      <p>{props.item.description}</p>
      
      <div className="text-center button">
        <a href={props.item.link} target="_blank" rel="noreferrer">Consulter</a>
      </div>
      
    </div>
  )
}

export default Article