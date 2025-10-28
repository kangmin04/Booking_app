import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './reserve.css'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';


const Reserve = ({setOpen , hotelId}) => {
    const [selectedRooms , setSelectedRooms] = useState([]);

    const {data ,error} = useFetch(`/api/hotels/room/${hotelId}`);
    console.log(data);
    if(error){
        console.log(error); 
    }
    const handleSelect = (e) => {
        const selected = e.target.checked ; //여긴 결국 tf만.  
        const value = e.target.value; //선택된 방의 id. 

        setSelectedRooms(selected ? [...selectedRooms , value] : selectedRooms.filter((item) => item !== value))

    }

    console.log(selectedRooms);


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
                                    <input type="checkbox" value = {roomNumber._id} onChange={handleSelect} />
                                </div>
                            ))
                        }                          
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Reserve; 