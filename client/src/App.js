import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import nytSearch from './utils/helpers.js';
import SearchComponent from './search.js';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
    this.getArticles = this.getArticles.bind(this)
  }
  getArticles(author) {
    nytSearch(author).then((articles) => {
      this.setState({ articles: articles.data.response.docs })
      console.log(this.state)
    }).catch((error) => {
       console.log(error)
    })

  }
  render() {
    return (
      <Router>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
              <div className="mdl-layout__header-row">
                {/* Title */}
                <span className="mdl-layout-title">New York Times Scraper</span>
                <div className="mdl-layout-spacer"></div>
                {/* Navigation */}
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                  <Link to="/search"><a className="mdl-navigation__link" href="">Search</a></Link>
                  <a className="mdl-navigation__link" href="">Saved Articles</a>
                </nav>
              </div>
            </header>
            <div className="mdl-layout__drawer">
              <span className="mdl-layout-title">Title</span>
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
              </nav>
            </div>
            <main className="mdl-layout__content">
              <div className="page-content">
                {/* Your application content goes here */}
                <Route path="/search" render={(props) => {
                    return <SearchComponent {...props} grabArticles={this.getArticles}/>
                  }} />
              </div>
            </main>
        </div>
      </Router>
    );
  }
}

export default App;
