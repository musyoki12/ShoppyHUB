import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
      <div className="navbar">
        <ul>
           
            {/* <li><Link className="nav-link" to="/">Home</Link></li> */}
            <li><Link className="nav-link" to="/">Home</Link> </li>
            <li><Link className="nav-link" to="/reviews">Reviews</Link> </li>                                                                                                                       
            <li><Link className="nav-link" to="/requests">Requests</Link> </li>
        </ul>
      </div>
    );
};


export default Navbar;