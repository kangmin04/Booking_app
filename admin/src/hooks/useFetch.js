
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

const useFetch = (url) => {
  const { data, error, isLoading , mutate } = useSWR(url, fetcher);

  console.log('refetch 실행됨. ')
  return {
    data: data || [],
    loading : isLoading , 
    error: error,
    reFetch: mutate, // Keep reFetch for backward compatibility
  };
};

export default useFetch;


// loading: !error && !data,








// import {useEffect, useState} from "react"
// import axios from 'axios'
// import useSWR from 'swr' 



// const useFetch = (url) => {
//     const fetcher = (url) => axios.get(url).then((res) => res.data); 
    
//     const {data ,loading ,  error , mutate} = useSWR(url , fetcher); 

//     console.log('useFetch 결과 ' , data);
//     return {
//         data , loading , error , reFetch : mutate
//     }
// };

// export default useFetch;




// import {useEffect, useState} from "react"
// import axios from 'axios'

// const useFetch = (url) => {
//     const [data , setData] = useState([]) ; 
//     const [loading , setLoading] = useState(false) ; 
//     const [error , setError] = useState(false) ; 

//     // console.log('useFetch에서 전달받은', url);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try{
//                 const res = await axios.get(url);
//                 setData(res.data);
//             }catch(err){
//                 setError(err); 
//             }
//             setLoading(false); 
//         };

//         fetchData(); 
//     } , [url])


//     const reFetch = async () => {
//         setLoading(true);
//         try{
//             // Use the full URL for the refetch request
//             const res = await axios.get(url);
//             setData(res.data);
//         }catch(err){
//             setError(err); 
//         }
//         setLoading(false); 
//     };
  
//     return {data,loading,error,reFetch};
// };

// export default useFetch;
