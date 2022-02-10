import React, { useState } from 'react'
import Layout from '../components/Layout'
import { collection, addDoc, getDocs } from "firebase/firestore";
// import { async } from '@firebase/util';
import fireDB from '../fireConfig'
import { fireproducts } from '../data';
import { async } from '@firebase/util';


function Homepage() {
  const [Products,setProducts]= useState([])

    async function addData(){
        try {
          await addDoc(collection(fireDB,'users'),{name:'vishv',age:  25})


        } catch (error) {
          alert("addData function is not working")  
        }
    }
    async function addProductData(){
      fireproducts.map(async(product)=>{
        try {
          await addDoc(collection(fireDB,'products'),product)
        } catch (error) {
          alert('addproductdata is not work')
          
        }
      })
    }
    async function getData(){
      try {
        const users = await getDocs(collection(fireDB,"products"))
        const productsArray=[]
        users.forEach((doc)=>{
          const obj={
            id: doc.id,
            ...doc.data()
          }
          productsArray.push(obj)
        })
        setProducts(productsArray)
        console.log(productsArray);
      } catch (error) {
        alert("getdata funcition not working ",error)
      }
    }
  return (
    <Layout>
        <div>
            <button className='btn btn-success mx-3' onClick={addProductData}>Add Data</button>
            <button className='btn btn-success' onClick={getData}>Get data from firebasae</button>
        </div>

    </Layout>
  )
}

export default Homepage