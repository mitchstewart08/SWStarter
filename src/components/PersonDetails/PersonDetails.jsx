import React, { Component } from 'react'

export default class PersonDetails extends Component {
  render(props) {
    const {details} = props;
    return (
      <div className="personDetails">
        <h3>{details.name}</h3>
        <div className="detailContainer">
        <h4>Details</h4>
        </div>
        <div className="detailContainer">
        <h4>Movies</h4>
        </div>
      </div>
    )
  }
}
