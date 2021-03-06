import React from 'react'
import {Link} from 'react-router-dom'

function ResultsBox(props) {
  
  return (
    <div className="box resultsBox">
     <h2>Results</h2>
     {props.loading ? (<div className="search-text"><div className="center"><span>{props.message}</span></div></div>)
     : (props.searchResults.results.map((item) => {
        const name = item.name || item.title;
        return(
        <div className="result" key={name}>
          <p>{name}</p>
            <Link to={{
              pathname: `/details/${name}`,
              state: {details: item}
            }}>
            <button className="btn"> See Details</button>
            </Link>
          
        </div>)
     }))}
    </div>
  )
}

export default ResultsBox

