import React, { useEffect } from 'react'
import {useState} from 'react'
const Github = () => {
    const [data,setData] =  useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hashmatr').then(response=>response.json())
        .then(data => {
            console.log(data);
            setData(data);
        }).catch(error => {
            console.error('Error fetching GitHub data:', error);
        })
    },[])
  return (
  <>
   <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}</div>
   <img src={data.avatar_url} alt="github profile picture" width={300}/>
     </>
  )
}

export default Github