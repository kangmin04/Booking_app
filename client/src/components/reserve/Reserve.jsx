import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './reserve.css'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';
import {  useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import axios from 'axios';


const Reserve = ({setOpen , hotelId}) => {
    const [selectedRooms , setSelectedRooms] = useState([]);

    const {data ,error} = useFetch(`/api/hotels/room/${hotelId}`);
  
    const {dates} = useContext(SearchContext);  
    
    if(error){
        console.log(error); 
    }
    const handleSelect = (e) => {
        const selected = e.target.checked ; //여긴 결국 tf만.  
        const value = e.target.value; //선택된 방의 id. 

        setSelectedRooms(selected ? [...selectedRooms , value] : selectedRooms.filter((item) => item !== value))
        //당연히 if로 처리하려 했으니ㅏ 이걸 setState 내부에서 삼항 연산자 쓰는 모습 . 아주 배울만하다. 
        console.log('selectedRoom : ' , selectedRooms);
    }

    const handleClick = async () => {
        try{       
            await Promise.all(
                selectedRooms.map((roomId) => {
                    const res = axios.put(`/api/rooms/availability/${roomId}` , {dates : alldates});
       }
    ))
    }catch(err){
        console.log(err);
    }
}

    // new Date(date)를 하면 새로운 객체를 만들어 내는 것. 즉 주소 참조 복사가 아니라 값 전체를 새롭게 .... 
    // 근데 let test = startDate 를 하면 주소를 복사하는 것. 즉 , [].push(test)하면 test 주소를 넣고 이후 test + 1하면 기존 배열에 있는 값도 변경됨. 
    // 즉 배열에 마지막 날짜만 채워짐 


    const getDatesInRange = (startDate , endDate) => {
        const rangeDates = [];
        let currentDate = new Date(startDate);

        // let test = startDate ;
        // console.log('test' , test)
        while(currentDate <= endDate){
            rangeDates.push(new Date(currentDate).getTime());
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return rangeDates;
    }
  
    const alldates = getDatesInRange(dates[0].startDate , dates[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((unavailableDate) => {
            console.log('unavailable Date 1개 받아온거 : ' , unavailableDate); 
            return  alldates.includes(new Date(unavailableDate).getTime());
        })
        return !isFound;
    }
    //some - 내부가 하나라도 true면 true 반환. 
    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={() => setOpen(false)}></FontAwesomeIcon>
                <span>select your room : </span>
                {
                    data.map(item => (
                        <div className="rItem" key = {item._id}>
                            <div className="rItemInfo">
                                <div className="rTitle">{item.title}</div>
                                <div className="rDesc">{item.desc}</div>
                                <div className="rMaxPeople">max {item.maxPeople} people</div>   
                                <div className='rPrice'>${item.price}</div>
                            </div>
                        {
                            item.roomNumbers.map(roomNumber => (
                          
                                <div className="room">
                                    <label>{roomNumber.number}</label>
                                    <input type="checkbox" value = {roomNumber._id} onChange={handleSelect} 
                                    disabled={!isAvailable(roomNumber)}/>
                                </div>
                        
                            ))
                        }                          
                        </div>
                    ))
                }
                <button onClick={handleClick}>Reserve NOW</button>
            </div>
        </div>
    )
}
export default Reserve; 


// selectedRoooms 변경되면 --> reserve 컴포넌트 전체가 리랜더링됨. 리액트 기본 동작원리
// 가상돔을 사용하여 실제 변경만 dom에 업데이트 하기에 성능저하는 크게없다. 