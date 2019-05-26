import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import '../styles/navbar.css'



class Navbar extends Component {

    render() {
        return (
          
                <div id="Navbar-container">
                    <div id="home" className="link"><Link to="/"><span className="main-directory-text">Home</span></Link></div>
                    <div id="catalog" className="link"><Link to="/catalog"><span className="main-directory-text">Catalog</span></Link></div>
                    <img id="logo" src="reflix-logo.png" alt="Reflix Logo" />
                </div>
               
        );
    }
}

export default Navbar;

