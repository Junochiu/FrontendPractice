import React, {Component} from "react"
import "../css/ArtDisplay.scss"

export default class ArtDisplay extends Component{
    constructor(props){
        super(props)
        this.arts = props.arts
        this.state={
            maxdisplay : props.maxdisplay,
            mindisplay : props.mindisplay,
            displaynum : props.displaynum
        }
    }
    render(){
        const showingarts = this.arts.slice(0,this.state.displaynum)

        return(
            <div className="artdisplay">
                {
                showingarts.map((item,index) => {
                    return (
                        <img src={item.imgsrc} key={index}/>
                    )
                })
                }
            </div>
        )
    }
}