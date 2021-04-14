import React, {Component} from "react"
import { Redirect } from "react-router-dom"
import "../css/ArtDisplay.scss"

export default class ArtDisplay extends Component{
    constructor(props){
        super(props)
        this.arts = props.arts
        this.state={
            displaynum : props.displaynum,
            redirect:null,
            redirectstate:null
        }
        this.OpenGlyph = this.OpenGlyph.bind(this)
    }
    OpenGlyph = (props) =>{
        this.setState({
            redirect:"/glyph",
            id:props
        })
    }
    render(){
        const showingarts = this.arts.slice(0,this.state.displaynum)
        if (this.state.redirect){
            return <Redirect push to={{pathname:this.state.redirect, state:{id:this.state.id,arts:this.arts}}}/>
        }
        return(
            <div className="artdisplay">
                {
                showingarts.map((item,index) => {
                    return (
                        <img src={item.imgsrc} key={index} onClick={()=>this.OpenGlyph(item.id)}/>
                    )
                })
                }
            </div>
        )
    }
}