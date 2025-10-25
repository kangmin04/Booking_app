import {React , useState} from 'react';
import './List.css';
import Navbar from '../../components/navbar/Navbar.jsx';
import Header from '../../components/header/Header.jsx';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem.jsx';
import useFetch from '../../hooks/useFetch.js';

const List = () => {
  const location = useLocation();
  const [destination , setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDates , setOpenDates] = useState(false); 
  const [options, setOptions] = useState(location.state.options);
  const [min , setMin] = useState(undefined);
  const [max , setMax] = useState(undefined);
  
  const {data , loading , error ,reFetch} = useFetch(`/api/hotels?city=${destination}&min=${min || 1}&max=${max || 9999}`); 
  console.log('List 가져오는 과정에서 error : ' , error)
  const handleDestination = (e) => {
    setDestination(e.target.value); 
    
  }

  const handleClick = () => {
    reFetch();
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
              <span onClick = {() => setOpenDates(!openDates)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
               {openDates && (<DateRange
                                     
                                      onChange={item => setDates([item.selection])}
                                      ranges={dates}
                                      minDate={new Date()}
                                      
                                      />
                                  )}
             </div>
             <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  {/* <div className="lsOptionIt">
                    <span className="lsOptionTex">
                      order by price
                    </span>
                    <input type="" className="isOption" />
                  </div> */}
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput"  
                  onChange={(e) => {setMin(e.target.value)}} min={0} />
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput"
                  onChange={(e) => {setMax(e.target.value)}} min={0}/>
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
                <button onClick={handleClick}>Search</button>
          </div>
          <div className="listSearchResult">
             {
              loading ? 'Loading' :  <>
                  {data.map(item => {
                    return <SearchItem item={item} key={item._id}/>  //item 전달하면서 searchItem에서 props으로 name , address 등 접근 가능하도록. 
                  })}
                  
              </>
             }
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;