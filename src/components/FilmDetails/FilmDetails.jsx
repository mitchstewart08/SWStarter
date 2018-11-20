import React from 'react'
import {Link} from 'react-router-dom'

const FilmDetails = props => {
  const {film} = props
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
        
        </div>
        <Link to={{pathname : '/'}}><button>Back to Search</button></Link>

      </div>
    </div>
  )
}

export default FilmDetails

