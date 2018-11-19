import React, { Component } from 'react'

export default class FilmDetails extends Component {
  render() {
    const {film} = this.props;
    console.log(film)
    return (
      <div>
        Film
      </div>
    )
  }
}
