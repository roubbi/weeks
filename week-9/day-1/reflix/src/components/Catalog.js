import React, { Component } from 'react';
import '../styles/catalog.css'
import Movie from './Movie';

class Catalog extends Component {
    constructor() {
        super()
        this.state = {
         budget: 10,
         searchedText:""
        }
      }

      displayRentedSection = () =>{

        console.log( this.props.movies.filter(m => m.isRented))
            
 
        } 

      searchMovie = (event) => {
        this.setState({searchedText: event.target.value })
       
       let moviesArray = this.props.movies.map(m =>  m.title)
        console.log(moviesArray.filter(m => m.toLowerCase().includes(event.target.value)))
        
        
        if (moviesArray.filter(m => m.toLowerCase().includes(event.target.value))){

            this.props.movies.map(m => 
            <Movie m={m} 
            rentMovie={this.props.rentMovie} 
            addBudget={this.addBudget} 
            removeBudget={this.removeBudget}
            />)

        }

      }

      addBudget = (event) => {
        this.setState({budget: this.state.budget+3 })
      }

      removeBudget = (event) => {
        this.setState({budget: this.state.budget-3 })
      }

    render() {

        return (
            <div>
                <div id="search-budget-container">
                    <input className="centered" type="text" placeholder="Search for a movie" id="search-bar" onChange={this.searchMovie}/>
                    <h3 className="right">Budget: {this.state.budget}</h3>
                </div>
               
                {this.props.movies.filter(m => m.isRented).length ? 
                    <div className="section-title-container">
                    <h2 className="centered" id="home-title">Rented</h2>
                </div> : null 
                }

                <div id="rented-movies-container"> 

                {this.state.searchedText === ""  ?
                        this.props.movies
                        .filter(m => m.isRented)
                        //.filter(m => m.title === this.state.searchedText)
                        .map((m,i) => <Movie key={i} m={m} 
                        rentMovie={this.props.rentMovie} 
                        addBudget={this.addBudget} 
                        removeBudget={this.removeBudget}
                    />) 
                        :  this.props.movies
                        .filter(m => m.isRented)
                        .filter(m => m.title.toLowerCase().includes(this.state.searchedText))
                        .map((m,i) => <Movie key={i} m={m} 
                        rentMovie={this.props.rentMovie} 
                        addBudget={this.addBudget} 
                        removeBudget={this.removeBudget}
                    />)  }

                </div>
                <div className="section-title-container">
                    <h2 className="centered" id="home-title">Catalog</h2>
                </div>

                <div id="movies-catalog-container">
                    {this.state.searchedText === ""  ?
                    this.props.movies.
                    map(m => 
                    <Movie m={m} 
                    rentMovie={this.props.rentMovie} 
                    addBudget={this.addBudget} 
                    removeBudget={this.removeBudget}
                    /> ):
                    
                    this.props.movies
                    .filter(m => m.title.toLowerCase().includes(this.state.searchedText))
                    .map(m => <Movie m={m} 
                    rentMovie={this.props.rentMovie} 
                    addBudget={this.addBudget} 
                    removeBudget={this.removeBudget}
                    /> )}
                </div>

            </div>
        );
    }
}

export default Catalog;

