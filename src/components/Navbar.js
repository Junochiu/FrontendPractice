import React,{Component} from "react"
import {Link} from "react-router-dom"
import twitter from '../img/twitter.svg';

import "../css/Navbar.scss"

export default class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("success")
        return(
            <div className="navbar">
                <div className="container">
                    <div className="logo">Larva Labs</div>
                    <nav>
                        <ul>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/writing">Writing</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><a href="www.twitter.com"><img src={twitter} alt="twitter icon"/></a></li>
                        </ul>
                    </nav>
                </div>
            </div>   
        )
    }
    
}