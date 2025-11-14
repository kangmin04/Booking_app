import { useState } from 'react'
import './add.scss'
import axios from 'axios'

const Add = (props) => {
    const [data , setData] = useState({}); 
    console.log('add에서 추가중인 데이터 : ' , data); 

    const handleSubmit = async () => {
       if (props.slug ==='users'){
            await axios.post('/auth/register' , data); 
       }else if(props.slug ==='Hotels'){
         await axios.post('/api/hotels' , data); 
       }
      
       props.setOpenAdd(false);
         
    }
    return (
        <div className="add">
            <div className="addContainer">
                <h1 className="title">Add {props.slug}</h1>
                <span className="close" onClick={() => props.setOpenAdd(false)}>X</span>
                <div className="form" onSubmit={handleSubmit}>
                    {props.columns.filter((col) => col.field !== 'id').map((col) => (
                        <div className="formRow">
                            <label>{col.headerName}</label>
                            <input type={col.type} placeholder={col.field} className='input' onChange={(e) => setData({...data , [col.field] : e.target.value})}/>
                        </div>
                     
                    ))}
                       <button onClick={handleSubmit}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Add