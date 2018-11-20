import React from 'react'
import {Link} from 'react-router-dom'

const FilmDetails = props => {
  let {film, characters} = props
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
          {characters.map((character) => (
            <span key={character.name}><Link to={{
              pathname: `/details/${character.name}`,
              state: {details: character}
            }}>{character.name}</Link>,
            </span>
            
          ))}
        </p>
        </div>
        <Link to={{pathname : '/'}}><button>Back to Search</button></Link>

      </div>
      {console.log("characthers array in film details ",characters)}
    </div>
    
  )
}

export default FilmDetails

