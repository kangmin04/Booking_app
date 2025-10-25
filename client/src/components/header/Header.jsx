import { React, useState  } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed , faPlane , faCar , faTaxi, faCalendarDays , faPerson} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'; //format(new Date(2014, 1, 11), "MM/dd/yyyy"); 뒤의 형식에 맞춰짐.
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext.js';
import { useContext } from 'react';

const Header = ({type}) => {
    const [destination , setDestination] = useState('');
    const [openDates, setOpenDates] = useState(false);
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        adult : 1 , 
        children : 0 , 
        room : 1 , 
      })
      const navigate = useNavigate();
      const  {dispatch}= useContext(SearchContext)
      
      const handleOption = (name , operation) => {
        setOptions(prev => {
            return {
                ...prev , 
                [name] : operation === 'i' ? prev[name] + 1 : prev[name] - 1 , 
            }
    
        }) }                                               
        const handleSearch = () => {
            dispatch({type : 'NEW_SEARCH' , payload : {destination , dates , options}})
            navigate('/hotels' , {state : {destination , dates , options} });
        };

  return (
    <div className="header">
        <div className={type === 'list' ? "headerContainer listMode" : 'headerContainer'}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flight</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            {/* prop 활용방법 */}
            { type !=='list' &&
            <>
            <h1 className="headerTitle">Nothing Beats You Jet2 Holiday </h1>
            <p className="headerDesc">
                you can get it 50 pounds off ! 
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className='headerIcon' />
                    <input 
                        type="text" 
                        placeholder="Where are you going?" 
                        className='headerSearchInput' 
                        onChange = {(e) => {setDestination(e.target.value)}}/>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
                    <span onClick={() => {setOpenDates(!openDates)}} className="headerSearchText">{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDates && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        className='date'
                        />
                    }
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                    <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adults ${options.children} children ${options.room} room`}</span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button 
                                    className="optionCounterButton" 
                                    onClick = {() => handleOption('adult' , 'd')}
                                    disabled = {options.adult <1}
                                    >-</button>
                                <div className="optionCounterNumber">{options.adult}</div>
                                <button className="optionCounterButton" onClick = {() => handleOption('adult' , 'i')}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" onClick = {() => handleOption('children' , 'd')}
                                    disabled = {options.children <1}>-</button>
                                <div className="optionCounterNumber">{options.children}</div>
                                <button className="optionCounterButton" onClick = {() => handleOption('children' , 'i')}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" onClick = {() => handleOption('room' , 'd')} disabled = {options.room <1} >-</button>
                                <div className="optionCounterNumber">{options.room}</div>
                                <button className="optionCounterButton" onClick = {() => handleOption('room' , 'i')}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
            </>
            }
        </div>
    </div>   
 
  );
};

export default Header;



//class component -> setState가 얕은 병합 기본적으로 지원. 
      //this.state = {a : 1 , b : 2}  this.setState({a : 200}) 이여도 a : 200 , b : 2로 존재.
      //function component -> 위와 같은 경우 b는 사라짐. 
      //스프레드 연산자로 복사해야함. setState(prev => {
      //...prev , a: 200})   즉 , 기존 데이터 유지 및 수정이 가능해짐. ! 
      //이때 setState(...prev , {a : 200})이면 setState함수에 여러 인자를 전달하는것임.(스프레드로 각 인자 전달 후 마지막에 추가)

      //[name] : ~ 이건 computed property name. ES6. 
      //[]안에 표현식 (값으로 평가가능한것) 넣은 형태를 키로 사용가능. 
      //즉 앞에서 선언한 변수를 뒤에서 객체의 키로 사용ㄱㄴ. 