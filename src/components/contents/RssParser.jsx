import React from 'react';
import Article from './Article.jsx'

/**
 * Permet de parser les données d'un flux RSS 
 */
export default class RssParser extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      feed: []
     };
  }

  async componentDidMount() {
  
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.lemonde.fr/rss/une.xml')}`)
      .then(response => response.json())
      .then(data => {

        var feed = new DOMParser().parseFromString(data.contents, "text/xml"); 

        const items = Array.from(feed.querySelectorAll("item")).map(item => ({
          title: item.querySelector("title").textContent,
          description: item.querySelector("description").childNodes[0].data,
          link: item.querySelector("link").childNodes[0].data
        }));

        this.setState({ news: items });

      })
  }

  render() {
    return (
    <div>      
      
      <h1>Blog Posts</h1>
      {this.state.news && this.state.news.map((item) => {
        return (
          <div>
            <Article item={item}/>
          </div>
        )
      })}
    </div>
    );
  }
}