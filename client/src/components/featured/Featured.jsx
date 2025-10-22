import React from 'react';
import './featured.css';
import useFetch from '../../hooks/useFetch';

const Featured = () => {

    const { data, loading, error } = useFetch('/api/hotels/countByCity?cities=Berlin,Madrid,London');

    console.log(data);
    console.log(error);
    return(
        <div className="featured">
            {
                loading ? ("loading please wait") : (
                    <>
                     <div className="featureItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square240/523320797.webp?k=65f084d84f65bea3075538152b8cfb6a049da37327d057f8d6fcdaf089f7c48d&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Madrid</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>
            <div className="featureItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square240/443190446.webp?k=87dacd8bb71396f4f7710ce94a88aa8e3cbead65ed64e6083f12713ceacb8270&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Berlin</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featureItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square240/384770457.webp?k=8c7b5cd0d60fcda7e3498bcaef5d0db158272c945c1969d00d6aee810a706dd4&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>London</h1>
                        <h2>{data[2]} properties</h2>
                </div>
            </div>
                    </>
                )
            }
           
        </div>
    )
}

export default Featured;