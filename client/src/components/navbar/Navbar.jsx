import React, { useContext } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

  const {user , dispatch} = useContext(AuthContext); 

  const handleClick = () => {
    dispatch({type : "LOGOUT"}); 
  }
  return (
    <div className="navbar">
        <div className="navContainer">
        <Link to='/'>
          <span className="logo">KangminBooking</span>
        </Link>
         {
           user ? (<div className='userInfo'>
            <div className="userName">{`hi ${user.username}`}</div>
            <button className="logoutButton" onClick={handleClick}>Logout</button>
            </div>
           ) : (
            <div className="navItems">
                <button className="navButton">Register</button>
                <Link to='/login'>
                <button className="navButton">Login</button>
                </Link>
            </div>
            ) }
        </div>
    </div>
  );
};

export default Navbar;



  {/* <span className="logo" onClick={() => navigate('/')}>KangminBooking</span> 
            navigate is more programatic way of redirecting. often used when the conditions needed or login form etc. 
            Link works as <a href> and enhance SEO. used for simply ui redirection
            */}