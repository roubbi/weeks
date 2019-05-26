import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom'
import '../styles/movie.css'

class Movie extends Component {

    rentMovie = () => {
        this.props.rentMovie(this.props.m.id)
        {this.props.m.isRented ? this.removeBudget() : this.addBudget() }
    }

    addBudget = () => {
        this.props.addBudget()
    }

    removeBudget = () => {
        this.props.removeBudget()
    }
    
    render() {

        return (
            <div>
                <Link to={`/movies/${this.props.m.id}`}><img className="movie-image" src={this.props.m.img} alt="movie" /></Link>
                <button className="rent-button" 
                onClick={this.rentMovie} >{this.props.m.isRented ? "Give it back" : "Rent Movie"}</button>
            </div>
        );
    }
}

export default Movie;