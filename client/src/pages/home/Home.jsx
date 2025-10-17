import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
const Home = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><Header /></div>
    </div>
  );
};

export default Home;