import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import DisplayModelsDetails from './DisplayModelsDetails';



const DisplayModels = () => {

const [data , setData ] = useState([]);


useEffect(()=> {
    axios.get('http://localhost:5000/api/crossovers/')
    .then((res)=> {
      setData(res.data)
    })
    .catch(err => console.log(err));
},[])

React.useEffect(() => {
  AOS.refresh();
}, []);


  return (
    <>
   <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full" >

{data.map((car,i)=> (
 <DisplayModelsDetails car={car} key={i} />
))}



      </div>
    </div>
   </>
  )
}

export default DisplayModels