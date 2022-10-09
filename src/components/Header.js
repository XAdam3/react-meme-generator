import React from "react"
import logo from "../images/troll-face.png"
export default function Header(){
    return(
        <header className="header">
            <img className="header-logo" src={logo} alt="troll face sketch"/>
            <h2 className="header-title">Meme Generator</h2>
            <p className="header-text">React Course - Project 3</p>
        </header>
    )
}