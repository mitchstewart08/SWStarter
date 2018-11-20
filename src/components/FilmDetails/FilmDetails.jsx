import React from 'react'
import {Link} from 'react-router-dom'

const FilmDetails = props => {
  const {film, characters} = props
  console.log(characters)
  return (
    <div>

       <div className="FilmDetails">
        <h3>{film.name}</h3>
        <div className="detailContainer">
          <h4>Opening Crawl</h4>
          <p>{film.opening_crawl}</p>
        
        </div>
        <div className="detailContainer">
        <h4>Characters</h4>
        
        <p>
          {console.log("characthers array in film details ",characters)}
          {console.log("characthers array in film details ",characters.length)}
          
          {characters.map((character) => (
            console.log(character)
            // <span><Link to={{
            //   pathname: `/details/${character.name}`,
            //   state: {details: character}
            // }}>{character.name}</Link>,
            // {console.log(character)}
            // </span>
            
          ))}
        </p>
        </div>
        <Link to={{pathname : '/'}}><button>Back to Search</button></Link>

      </div>
    </div>
  )
}

export default FilmDetails

