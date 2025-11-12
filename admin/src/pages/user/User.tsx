import './user.scss' 
import Single from '../single/Single'
// import { useLocation } from 'react-router-dom'
// import { userRows } from '../../data' ; 
import { singleUser } from '../../data'
const User = () => {
    //db에서 user 가져오기. 
    // const location = useLocation();
    // const userId : number= parseInt(location.pathname.split('/')[2]);
     
    // //axios.get(`users/${userId}`)
    // const data = userRows[userId]; 
    return (
        <div className="">  
        <p>this is a single usesr page</p>
            <Single {...singleUser}/>
        </div>
        
    )
}

export default User; 