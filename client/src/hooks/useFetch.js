import {useEffect, useState} from "react"

const useFetch = (url) => {
    const [data , setData] = useState([]) ; 
    const [loading , setLoading] = useState(false) ; 
    const [error , setError] = useState(false) ; 

    useEffect(() => {

    } , [url])