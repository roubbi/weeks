import React, { Component } from 'react'
import { BrowserRouter as  Link } from 'react-router-dom'
import '../styles/landing.css'




class Landing extends Component {

    render() {
        return (
            <div id="Landing-container">
                <h1 id="home-title">Who's watching ?</h1>
                <div className="users-boxes">
                <Link to="/catalog"><div className="userBox" id="red-box">Ruben</div></Link>
                <Link to="/catalog"><div className="userBox" id="cyan-box">Salomé</div></Link>
                <Link to="/catalog"><div className="userBox" id="green-box">Gabriel</div></Link>
                <Link to="/catalog"><div className="userBox" id="yellow-box">Avishay</div></Link>
                </div>
            </div>
        );
    }
}

export default Landing;

