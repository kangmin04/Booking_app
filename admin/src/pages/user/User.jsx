import './user.scss' 
import Single from '../single/Single'
import { singleUser } from '../../data.js'
import {  useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch.js'

const User = () => {
    const location = useLocation(); 
    const userId = location.pathname.split('/')[2]; 
    const {data} = useFetch(`api/users/${userId}`)
    console.log(data); 
    return (
        <div className="">
            <Single {...singleUser}/>
        </div>
        
    )
}

export default User; 