import React, { Component } from 'react'
import FilmDetails from '../components/FilmDetails/FilmDetails'
import PersonDetails from '../components/PersonDetails/PersonDetails'
import axios from 'axios';

export default class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      details : props.location.state.details,
      films: [],
      characters: [],
    }
    this.getCharacters = this.getCharacters.bind(this)
    this.getFilms = this.getFilms.bind(this)

    this.isFilm = this.state.details.name ? false : true;
    this.isFilm ? this.getCharacters(this.state.details.characters) : this.getFilms(this.state.details.films);
  }

  getCharacters(characters){
    let charactersArray = [];

    characters.forEach((url) => {
      console.log(url);
      axios.get(url)
           .then((res) => {
            charactersArray.push(res.data)})
           .catch((err) => console.log(err))
           .finally(() => this.setState({characters: charactersArray}))
    })
  }

  getFilms(films){

  }


  
  render() {
    
    return (
      <div className="box detailsBox">
        {this.isFilm ? <FilmDetails film={this.state.details} characters={this.state.characters}/> :
         <PersonDetails person={this.state.details} films={this.state.films} />}
      </div>
    )
  }
}
