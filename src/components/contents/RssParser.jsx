import React from "react";
import Article from "./Article.jsx";

/**
 * Permet de parser les données d'un flux RSS
 */
export default class RssParser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
    };
  }

  async componentDidMount() {
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        this.props.link
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        const feed = new DOMParser().parseFromString(data.contents, "text/xml");

        const items = Array.from(feed.querySelectorAll("item")).map((item) => ({
          title: item.querySelector("title").textContent,
          description: item.querySelector("description").childNodes[0].data,
          link: item.querySelector("link").childNodes[0].data,
          pubDate: Date.parse(item.querySelector("pubDate").childNodes[0].data),
          urlImage: item.querySelector("*|content").getAttribute("url"),
          altImage: item
            .querySelector("*|content")
            .querySelector("*|description"),
          mediaCredit: item
            .querySelector("*|content")
            .querySelector("*|credit"),
        }));

        this.setState({ news: items, loading: false });
      });
  }

  render() {
    return (
      <div className="col-md-12 stick">
        <div className="margin-top">
          {this.state.news &&
            this.state.news.map((item) => {
              return (
                <div key={item.link}>
                  <Article item={item} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
