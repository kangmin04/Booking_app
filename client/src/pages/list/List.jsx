import {React , useState} from 'react';
import './List.css';
import Navbar from '../../components/navbar/Navbar.jsx';
import Header from '../../components/header/Header.jsx';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem.jsx';

const List = () => {
  const location = useLocation();
  const [destination , setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate , setOpenDate] = useState('false'); 
  const [options, setOptions] = useState(location.state.options);

  const handleDestination = (e) => {
    setDestination(e.target.value); 
    
  }
  return (
    <div>
      <Navbar/><Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
             <h1 className="lsTitle">Search</h1>
             <div className="lsItem">
                <label>Destination</label>
                <input type="text" 
               placeholder={destination} 
               onChange = {handleDestination}/>
             </div>
             <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick = {() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
               {openDate && (<DateRange
                                     
                                      onChange={item => setDate([item.selection])}
                                      ranges={date}
                                      minDate={new Date()}
                                      
                                      />
                                  )}
             </div>
             <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
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
                  <input type="number" className="lsOptionInput" min={0} placeholder= {options.adult}
                  onChange={(e) => setOptions({...options , adult: e.target.value})}/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Children
                  </span>
                  <input type="number" min={0} className="lsOptionInput" placeholder = {options.children}
                  onChange={(e) => setOptions({...options , children: e.target.value})}/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Room
                  </span>
                  <input type="number" min={1}  className="lsOptionInput" placeholder= {options.room}
                  onChange={(e) => setOptions({...options , room: e.target.value})}/>
                </div>
                </div>
             </div>
                <button>Search</button>
          </div>
          <div className="listSearchResult">
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;