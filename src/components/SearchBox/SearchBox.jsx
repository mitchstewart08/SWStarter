import React, { Component } from 'react'

export default class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      selectedOption: 'person'
    }
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(changeEvent){
    this.setState({
      selectedOption: changeEvent.target.value
    })
  }
  render() {
    return (
      <div className="box searchBox">
        <form>
        <p>What are you searching for?</p>
        <div className="radioButtons">
          <label>
              <input type="radio" name="editList" checked={this.state.selectedOption === 'person'}  
              onChange={this.handleOptionChange} value="person"/>Person
          </label>
          <label>
              <input type="radio" name="editList" checked={this.state.selectedOption === 'movie'} 
                onChange={this.handleOptionChange} value="movie"/>Movie
          </label>
        </div>

        </form>

      </div>
    )
  }
}
