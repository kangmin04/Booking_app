import {useEffect, useState} from "react"
import axios from 'axios'

const useFetch = (url) => {
    const [data , setData] = useState([]) ; 
    const [loading , setLoading] = useState(false) ; 
    const [error , setError] = useState(false) ; 

    console.log('useFetch에서 전달받은', url);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const res = await axios.get(url);
               
                setData(res.data);
            }catch(err){
                setError(err); 
            }
            setLoading(false); 
        };

        fetchData(); 
    } , [url])


    const reFetch = async () => {
        setLoading(true);
        try{
            // Use the full URL for the refetch request
            const res = await axios.get(url);
            setData(res.data);
        }catch(err){
            setError(err); 
        }
        setLoading(false); 
    };
  
    return {data,loading,error,reFetch};
};

export default useFetch;
