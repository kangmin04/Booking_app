import React from 'react';
import './featuredProperties.css';
import useFetch from '../../hooks/useFetch.js'
const FeaturedProperties = () => {

  const {data , loading,error} = useFetch('/api/hotels?featured=true&limit=4'); 
console.log(error);
  return (
    <div className="fp">
    {
      loading ? ('loading' ) :  (
      <>
      {
        data.map((item) => { return (
          <div className="fpItem">
          <img
            src={item.photos[0]}
            alt=""
            className="fpImg"
          />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.address}</span>
          <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
          {
            data && <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
          }
          
        </div>
        )
        })
      }     
     
    
      </>)
    }
    </div>
    
  );
};

export default FeaturedProperties;
