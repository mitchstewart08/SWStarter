import React, { Component } from "react";
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import ResultsBox from '../components/ResultsBox/ResultsBox.jsx';
import {API_URL} from '../constants'
import axios from 'axios'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      results : ''
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(input, selection){
    const query = selection === 'person' ? `people/?search=${input}` : `films/?search=${input}`
    const url = `${API_URL}/${query}`
    console.log(url);
    axios.get(url)
          .then((res)=>{
            console.log(res);
            this.setState({results: res.data.results})
          })
          .catch((err)=> console.log(err))
  }
  
  render() {
    return (
    <div className="main-view">
      <SearchBox  handleSearch={this.handleSearch}/>
      <ResultsBox results={this.state.results}/>
    </div>)
  }
}
