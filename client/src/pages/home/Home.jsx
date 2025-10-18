import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/propertyList';
import FeaturedProperties from '../../components/featuredProperties/featuredProperties';

const Home = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><Header /></div>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;