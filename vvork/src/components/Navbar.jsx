import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render() {
        return(
        <nav className="navbar">
            <div className="logo">
            <h3>
                        {this.props.test.name}
            </h3>
            </div>
            <div className="nav-right">
            <ul className="nav">
         
            <li className="nav-items"><Link className="link" to = '/'>Home</Link></li>


            <li className="nav-items">Blog</li> 

            <li className="nav-items"><Link className="link" to = '/about'>About</Link></li>

            <li className="nav-items">Contact</li>
            </ul>
            </div>
        </nav>
        )
    }
}

export default Navbar;