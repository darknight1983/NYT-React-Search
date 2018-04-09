import React, { Component } from 'react';


{/*
This component will be an example of a "Controlled Component". According to
React, form elements in React naturally keep some internal state.

 */}
class SearchComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      topic: '',
      startYear: null,
      endYear: null
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
    const { topic, startYear, endYear } = this.state;
    console.log(topic, startYear, endYear)
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Topic:
            <input onChange={this.handleChange}
                   value={this.state.topic}
                   type="text"
                   name="topic" />
          </label>
          <label>
            Start Year:
            <input type="text"
                   name="startYear"
                   value={this.state.startYear}
                   onChange={this.handleChange} />
          </label>
          <label>
            End Year:
            <input type="text"
                   name="endYear"
                   value={this.state.endYear}
                   onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default SearchComponent;
