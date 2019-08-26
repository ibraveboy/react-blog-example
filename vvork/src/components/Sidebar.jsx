import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
            
            <nav className="side-menu">
                <ul>
                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
      </div>
    )
  }
}
