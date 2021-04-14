import React,{Component} from 'react'
import {Link} from "react-router-dom"

import "../css/Glyph.scss"

export default class Glyph extends Component{
    constructor(props){
        super(props)
        this.arts=this.props.location.state.arts
        this.state={
            id:this.props.location.state.id-1,
        }
        this.Forward = this.Forward.bind(this)
        this.Backward = this.Backward.bind(this)
    }

    Backward = () =>{
        this.setState({
            id:Math.abs((this.state.id+this.arts.length-1)%this.arts.length)
        })
    }

    Forward = () =>{
        this.setState({
            id:Math.abs((this.state.id+1)%this.arts.length)
        })
    }

    render(){
        return(
            <div>
                <div className="banner">
                    <h3>Autoglyph #{this.state.id+1}</h3>
                    <ul>
                        <p onClick={this.Backward}>{'\u21E6'}</p>
                        <Link to="/">Home</Link>
                        <p onClick={this.Forward}>{'\u21E8'}</p>
                    </ul>
                </div>
                <div className="glyphimg">
                    <img src={this.arts[this.state.id].imgsrc} alt="glyph"/>
                </div>
                <div className="metadata">
                    <div className="cell">
                        <div className="title">Symbol Scheme</div>
                        <div className="content">{this.arts[this.state.id].symbolscheme}</div>
                    </div>
                    <div className="cell">
                        <div className="title">Creator</div>
                        <div className="content pink">{this.arts[this.state.id].creator}</div>
                    </div>
                    <div className="cell">
                        <div className="title">Owner</div>
                        <div className="content pink">{this.arts[this.state.id].owner}</div>
                    </div>
                </div>
            </div>
        )
    }
}