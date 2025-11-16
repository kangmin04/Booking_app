import { useState } from 'react'
import './add.scss'
import axios from 'axios'
import {mutate} from 'swr' 


const Add = (props) => {
    const [data , setData] = useState({}); 

    const handleSubmit = async (e) => {
        e.preventDefault() ; 
        console.log('submit 누름')
        try{
            if (props.slug ==='users'){
                await axios.post('/auth/register' , data); 
                mutate('/api/users') ; 
                console.log('mutate 실행됨')
            }else if(props.slug ==='Hotels'){
                await axios.post('/api/hotels' , data); 
                mutate('/api/hotels') ; 
         }
      
       props.setOpenAdd(false);

    }catch(err){
        console.log(err); 
    }
    //    window.location.reload() ; add 시 사용자가 db에 바로 떳으면 해서 했음. 
         
    }
    return (
        <div className="add">
            <div className="addContainer">
                <h1 className="title">Add {props.slug}</h1>
                <span className="close" onClick={() => props.setOpenAdd(false)}>X</span>
                <form className="form" onSubmit={handleSubmit}>
                    {props.columns.filter((col) => col.field !== 'id').map((col) => (
                        <div className="formRow" key={col.field}>
                            <label>{col.headerName}</label>
                            <input type={col.type} placeholder={col.field} className='input' onChange={(e) => setData({...data , [col.field] : e.target.value})}/>
                        </div>
                     
                    ))}
                       <button onClick={handleSubmit}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Add



