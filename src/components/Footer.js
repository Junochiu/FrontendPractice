import {Link} from 'react-router-dom'
import twitter from '../img/twitter.svg'

import "../css/Footer.scss"

export default function Footer(){
    return(
        <div className="footer">
            <ul>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/writing">Writing</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/twitter"><img src={twitter} alt="twitter icon"/></Link></li>
            </ul>
        </div>
    )
}