import React, { Component } from 'react';
import '../styles/MovieDetails.css'

class MovieDetails extends Component {

    render() {      
        let movie = this.props.movies[this.props.match.match.params.id]

         return (

            <div>
                <div key={movie.id} className="movie">
                    <h2 className="movie-title" >{movie.title} ({movie.year})</h2>
                   <img className="movie-image-MD" src={movie.img} alt="movie"></img>
                    <p className="movie-descr">{movie.descrShort}</p>
                </div>
            </div>      
        );
    }
}

export default MovieDetails;

