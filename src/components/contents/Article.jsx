import React from "react";
import "./Article.scss";

/**
 * Permet d'afficher le contenu d'un article
 * @param {*} props
 * @returns
 */
const Article = (props) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const handleMedia = (media) => {
    if (props.item.altImage && props.item.mediaCredit) {
      return (
        <div>
          <img
            src={props.item.urlImage}
            alt={props.item.altImage.textContent}
          />
          <p className="article-img-description">
            {props.item.altImage.textContent} |{" "}
            {props.item.mediaCredit.textContent}
          </p>
        </div>
      );
    } else if (props.item.mediaCredit) {
      <div>
        <img src={props.item.urlImage} alt="Image d'illustration" />
        <p className="article-img-description">
          {props.item.mediaCredit.textContent}
        </p>
      </div>;
    } else {
      return <img src={props.item.urlImage} alt="Image d'illustration" />;
    }
  };

  return (
    <div className="article-container" key={props.item.title}>
      <h2>{props.item.title}</h2>
      <h4>
        Publication :{" "}
        {new Date(props.item.pubDate).toLocaleDateString(undefined, options)}
      </h4>

      {handleMedia()}

      <q>{props.item.description}</q>

      <div className="text-center button">
        <a href={props.item.link} target="_blank" rel="noreferrer">
          Consulter
        </a>
      </div>
    </div>
  );
};

export default Article;
