import './user.scss' 
import Single from '../single/Single'
import { singleUser } from '../../data.js'

const User = () => {

    return (
        <div className="">
        <p>this is a single usesr page</p>
            <Single {...singleUser}/>
        </div>
        
    )
}

export default User; 