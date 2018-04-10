import React, { Component } from 'react';
import axios from 'axios';
import nytSearch from './utils/helpers.js';
import './css/search.css';




{/* Pull in the axios package to make the request to NYT API */}




{/*
This component will be an example of a "Controlled Component". According to
React, form elements in React naturally keep some internal state.
 */}
class SearchComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      topic: ''
    }


  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    {/* Use axios in this function to make a get request to NYT API */}
    e.preventDefault()
    const { topic } = this.state;

    nytSearch(topic)
  }

  render() {
    return (
      <div className="search-card mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">NYT Search</h2>
        </div>
        <div className="mdl-card__supporting-text">
          What are you interested in today?
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <form>
            <label>
              Topic:
              <input onChange={this.handleChange}
                     value={this.state.topic}
                     type="text"
                     name="topic" />
            </label>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    )
  }
}

export default SearchComponent;
