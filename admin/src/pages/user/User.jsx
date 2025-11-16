import './user.scss' 
import Single from '../single/Single'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch.js'

const User = () => {
    const location = useLocation(); 
    const userId = location.pathname.split('/')[2]; 
 // const getUserInfo = async () => {
    //     const aUser = await axios.get(`/api/users/${userId}`) ; 
    //     console.log('userInfo : ' , aUser.data); 
    // }  
    // getUserInfo() ; 
    //리액트는 state/props update 될 때마다 리렌더링. 상태 변경 로직이 추가될 경우 무한루프 위험. ( 여러번 axios가 호출될수도)
    // loading , error등 상태관리 부재 , 코드의 비선언성. --> useEffect를 사용함녀 url변경시마다 ui  업데이트 ㄱㄴ
    const { data, loading, error } = useFetch(`/api/users/${userId}`);
   const {_id, img, password, __v, ...infoData} = data ;  
    console.log(infoData)
    return (
        <div className="user">
            {loading ? (
                "Loading..."
            ) : error ? (
                "Something went wrong!"
            ) : (
                <Single 
                    {...data} // Keep chart and activities from static data
                    info={infoData} 
                />
            )}
        </div>
    )
}

export default User; 
