import React, { Component } from 'react'
import FilmDetails from '../components/FilmDetails/FilmDetails'
import PersonDetails from '../components/PersonDetails/PersonDetails'

export default class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      details : props.location.state.details,
    }
  }
  
  render() {
    let isFilm = this.state.details.name ? false : true;
    return (
      <div className="box detailsBox">
        {isFilm ? <FilmDetails film={this.state.details} /> : <PersonDetails person={this.state.details} />}
      </div>
    )
  }
}
