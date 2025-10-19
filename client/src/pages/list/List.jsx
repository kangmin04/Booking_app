import React from 'react';
import './List.css';
import Navbar from '../../components/navbar/Navbar.jsx';
import Header from '../../components/header/Header.jsx';

const List = () => {
  return (
    <div>
      <Navbar/><Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
             <h1 className="lsTitle">Search</h1>
             <div className="lsItem">
                <label>Destination</label>
                <input type="text" />
             </div>
             <div className="lsItem">
                <label>Check-in Date</label>
                <input type="text" />
             </div>
             <div className="lsItem">
                <label>Options</label>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Adult
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Children
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Room
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
             </div>
                <button>Search</button>
          </div>
          <div className="listSearchResult">
              result
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;