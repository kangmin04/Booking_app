import React from 'react';
import './navbar.css';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to='/'>
        <span className="logo">KangminBooking</span>
        </Link>
            {/* <span className="logo" onClick={() => navigate('/')}>KangminBooking</span> 
            navigate is more programatic way of redirecting. often used when the conditions needed or login form etc. 
            Link works as <a href> and enhance SEO. used for simply ui redirection
            */}
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
