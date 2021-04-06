import Navbar from "./components/Navbar"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import React,{Component} from 'react'

import './App.css';

import Autoglyphs from "./components/Autoglyphs"
import Projects from "./components/Projects"
import Writing from "./components/Writing"
import About from "./components/About"


export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  
  render(){
    return (
      <BrowserRouter>
        <Navbar props={this.state}/>
        <Switch>
            <Route exact path="/" component={Autoglyphs} />
            <Route path="/projects" component={Projects} />
            <Route path="/writing" component={Writing} />
            <Route path="/about" component={About} />
          </Switch>
      </BrowserRouter>
    )
  }
}

