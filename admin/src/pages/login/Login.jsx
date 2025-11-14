import {react , useState , useContext } from 'react' ; 
import './login.scss' ; 
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const Login = () => {
    const [credentials , setCredentials] = useState({
        username : undefined , 
        password : undefined
    })

    const {loading , error , dispatch} = useContext(AuthContext); 

    const navigate = useNavigate(); 
    
    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev , 
            [e.target.id] : e.target.value
        }))

    }

    const handleClick = async (e) => {
        e.preventDefault();
       
        dispatch({type : "LOGIN_START"}) ; 
        try{
            const res = await axios.post('auth/login' , credentials) ; 
            if(res.data.isAdmin){
                dispatch({type : "LOGIN_SUCCESS" , payload : res.data.details}) ; 
                navigate('/')
            }else{
                dispatch({type : "LOGIN_FAILURE" , payload : {message : 'u r not admin'}}) ; 
                navigate('/login')
            }
        }catch(err){
            dispatch({type : "LOGIN_FAILURE" , payload : err.response.data}); 
        }
    }

    return (
        <div className="login">
            <form className="lContainer" onSubmit={handleClick}>
                <input type="text" placeholder='username' id='username' onChange={handleChange} className="lInput" autoComplete='username' />
                <input type="password" placeholder='password' id='password' onChange={handleChange} className="lInput" />
                <button disabled={loading} className="lButton" onClick = {handleClick}>Login</button>
                {error && <span style={{color : 'red'}}>{error.message}</span>  }
            </form>
        </div>
    )    
    
}

export default Login; 

// form 태그로 onsubmit 시 기존 div와 input으로 표현하는 거에 비해 
// 엔터만으로도 클릭이 되서 더 사용자 친화적 UI