import {React , useState} from 'react';
import './List.css';
import Navbar from '../../components/navbar/Navbar.jsx';
import Header from '../../components/header/Header.jsx';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns';
import { DateRange } from 'react-date-range';

const List = () => {
  const location = useLocation();
  const [destination , setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate , setOpenDate] = useState('false'); 
  const [options, setOptions] = useState(location.state.options);

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
               onChange = {() => {setDestination()}}/>
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
                  <input type="number" className="lsOptionInput" value = {options.adult}/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Children
                  </span>
                  <input type="number" className="lsOptionInput" value = {options.children}/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Room
                  </span>
                  <input type="number" className="lsOptionInput" value = {options.room}/>
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