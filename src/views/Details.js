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
      loading: true,
    }
    this.getCharacters = this.getCharacters.bind(this)
    this.getFilms = this.getFilms.bind(this)
    this.renderContent = this.renderContent.bind(this)

    this.isFilm = this.state.details.name ? false : true;
  }

  componentDidMount(){
    this.isFilm ? this.getCharacters(this.state.details.characters) : this.getFilms(this.state.details.films);
  }

  componentDidUpdate(prevProps){
    if(this.props.location.pathname !== prevProps.location.pathname){
      console.log("updated");
      this.isFilm = !this.isFilm
      this.setState({details: this.props.location.state.details})
    }
  }

  getCharacters(characters){
    let charactersArr = [];
    axios.all(characters.map(character => axios.get(character)))
                                .then(res => {
                                  charactersArr = res.map((item) => item.data)
                                  this.setState({characters: charactersArr,
                                                 loading: false})
                                })
                                .catch(err => console.log("Error fetching characters ", err))

    
  }

  getFilms(films){
    let filmsArr = [];
    axios.all(films.map(film => axios.get(film)))
                                .then(res => {
                                  filmsArr = res.map((item) => item.data)
                                  this.setState({films: filmsArr,
                                                 loading: false})
                                })
                                .catch(err => console.log("Error fetching films ", err))
  }

  renderContent(){
    if(this.state.loading){
      return(<p>Loading</p>)
    }else{
    if(this.isFilm){
      return(<FilmDetails film={this.state.details} characters={this.state.characters} loading={this.state.loading}/>)
    }else{
      return(<PersonDetails person={this.state.details} films={this.state.films} loading={this.state.loading}/>)
    }
  }
  }


  render() {
    
    return (
      <div className="box detailsBox">
       {this.renderContent()}
      </div>
    )
  }
}
