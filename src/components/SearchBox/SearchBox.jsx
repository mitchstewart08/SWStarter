import React, { Component } from 'react'

export default class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: null,
      selectedOption: 'person'
    }
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOptionChange(event){
    this.setState({
      selectedOption: event.target.value
    })
  }

  handleSearchChange(event){
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleSearch(this.state.input);
  }

  render() {
    const moviePlaceHolder = "e.g. A New Hope, Empire Strikes Back, Rogue One";
    const personPlaceHolder = "e.g. Chewbacca, Yoda, Boba Fett"

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
        <input type="text" name="query" onChange={this.handleSearchChange}
        placeholder={this.state.selectedOption === 'person' ? personPlaceHolder : moviePlaceHolder}/>
        
        <button disabled={this.state.input ? false : true} onClick={this.handleSubmit}>Search</button>
        </form>

      </div>
    )
  }
}
