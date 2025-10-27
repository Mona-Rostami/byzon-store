import { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import axios from 'axios'
import { BsBack } from 'react-icons/bs'
import CategoryList from './CategoryList'
const CategoryProduct = () => {
    const promp=useParams().category
    const category=promp
    console.log(promp);
    
const[data,setData]=useState()     
  console.log(promp);
  const getApi=async()=>{
    try {
       const res=await axios.get(`https://dummyjson.com/products/category/${category}`)
         setData(res.data.products)
         console.log(res.data);
         
    } catch (error) {
       console.log(error);
        
    }
  }
  useEffect(()=>{
    getApi()
  })
  return (
    <div>
      {data?<div>
        <h1><BsBack/></h1>
        <CategoryList data={data}/>
      </div>:<div></div>}
    </div>
  )
}

export default CategoryProduct
