import React, { Component } from "react";
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import ResultsBox from '../components/ResultsBox/ResultsBox.jsx';
import {API_URL} from '../constants'
import axios from 'axios'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      results : [],
      loading: true,
      message: "There are zero matches.\n Use the form to search for People and Movies"
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(input, selection){
    const query = selection === 'person' ? `people/?search=${input}` : `films/?search=${input}`
    const url = `${API_URL}/${query}`
    this.setState({message: "Searching..."})
    axios.get(url)
          .then((res)=>{
            if(res.data.count > 0){
            this.setState({
              results: res.data,
              loading: false
            })
          }})      
          .catch((err)=> console.log(err))
  }
  
  render() {
    return (
    <div className="main-view">
      <SearchBox  handleSearch={this.handleSearch}/>
      <ResultsBox searchResults={this.state.results} loading={this.state.loading} message={this.state.message}/>
    </div>)
  }
}