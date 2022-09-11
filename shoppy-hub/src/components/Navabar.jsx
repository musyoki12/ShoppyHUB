import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
      <div className="navbar">
        <ul>
           
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/About">About</Link> </li>
            <li><Link className="nav-link" to="/UserReviews">UserReviews</Link> </li>                                                                                                                       
            <li><Link className="nav-link" to="/Signup">Requests</Link> </li>
        </ul>
      </div>
      </>
    );
};


export default Navbar;