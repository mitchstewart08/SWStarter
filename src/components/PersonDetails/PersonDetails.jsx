import React from 'react'
import {Link} from 'react-router-dom'

const PersonDetails = props => {
  const {person} = props
  return (
    <div>
       <div className="personDetails">
        <h3>{person.name}</h3>
        <div className="detailContainer">
          <h4>Details</h4>
          <ul className="personDetails">
            <li>Birth Year: {person.birth_year}</li>
            <li>Gender: {person.gender}</li>
            <li>Eye Color: {person.eye_color}</li>
            <li>Hair Color: {person.hair_color}</li>
            <li>Height: {person.height}</li>
            <li>Mass: {person.mass}</li>
          </ul>
        </div>
        <div className="detailContainer">
        <h4>Movies</h4>
        </div>
        <Link to={{pathname : '/'}}><button>Back to Search</button></Link>

      </div>
    </div>
  )
}

export default PersonDetails

