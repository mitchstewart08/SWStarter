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

  async getCharacters(characters){
    let charactersArr = [];
    // await characters.forEach((url) => {
    //     axios.get(url)
    //        .then((res) => {
    //         charactersArr.push(res.data)
    //        })
    //          .catch((err) => console.log(err))
      
    // })
    
    // this.setState({characters: charactersArr,
    //                loading: false})

    axios.all(characters.map(character => axios.get(character)))
                                .then(res => {
                                  charactersArr = res.map((item) => item.data)
                                  this.setState({characters: charactersArr,
                                                 loading: false})
                                })
                                .catch(err => console.log("Error fetching characters ", err))

    
  }

  getFilms(films){

  }

  renderContent(){
    if(this.state.loading){
      return(<p>Loading</p>)
    }else{
    if(this.isFilm){
      console.log("characters",this.state.characters[0]);
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
