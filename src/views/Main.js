import React, { Component } from "react";
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import ResultsBox from '../components/ResultsBox/ResultsBox.jsx';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      results : ''
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(input){
    console.log(input);
  }
  
  render() {
    return (
    <div className="main-view">
      <SearchBox  handleSearch={this.handleSearch}/>
      <ResultsBox results={this.state.results}/>
    </div>)
  }
}
