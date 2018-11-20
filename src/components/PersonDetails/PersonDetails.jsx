import React from 'react'
import {Link} from 'react-router-dom'

const PersonDetails = props => {
  const {person, films} = props
  return (
    <div className="detailsContainer" id="details">
      <h3>{person.name}</h3>
       <div className=" detailsGrid">
       <div className="grid-item">
        
          <h4>Details</h4>
          <ul className="personDetails">
            <li>Birth Year: {person.birth_year}</li>
            <li>Gender: {person.gender}</li>
            <li>Eye Color: {person.eye_color}</li>
            <li>Hair Color: {person.hair_color}</li>
            <li>Height: {person.height}</li>
            <li>Mass: {person.mass}</li>
          </ul>
          <Link to={{pathname : '/'}}><button>Back to Search</button></Link>
        </div>
        <div className="grid-item movieContainer">
        <h4>Movies</h4>
        <p>
        {films.map((film) => (
            <span key={film.title}><Link to={{
              pathname: `/details/${film.title}`,
              state: {details: film}
            }}>{film.title}</Link>,
            </span>
            
          ))}
        </p>
        </div>
        

      </div>
    </div>
  )
}

export default PersonDetails

