import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { collection, addDoc, getDocs } from "firebase/firestore";
// import { async } from '@firebase/util';
import fireDB from '../fireConfig'
import { fireproducts } from '../data';
import { async } from '@firebase/util';
import '../stylesheet/Homepage.css'

function Homepage() {
  const [products, setProducts] = useState([])


  async function addData() {
    try {
      await addDoc(collection(fireDB, 'users'), { name: 'vishv', age: 25 })


    } catch (error) {
      alert("addData function is not working")
    }
  }
  async function addProductData() {
    fireproducts.map(async (product) => {
      try {
        await addDoc(collection(fireDB, 'products'), product)
      } catch (error) {
        alert('addproductdata is not work')

      }
    })
  }
  async function getData() {
    try {
      const users = await getDocs(collection(fireDB, "products"))
      const productsArray = []
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data()
        }
        productsArray.push(obj)
      })
      setProducts(productsArray)
      console.log(productsArray);
    } catch (error) {
      alert("getdata funcition not working ", error)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <Layout>
      <div>
        <button className='btn btn-success mx-3' onClick={addProductData}>Add Data</button>
        <button className='btn btn-success' onClick={getData}>Get data from firebasae</button>
      </div>

      <div className='container'>
        {/* <h4>test1</h4> */}
        <div className="row">
          {/* <h4>test2</h4> */}
        {products.map((product)=>{
          return <div className='col-md-4'>
            {/* <h4> test3</h4> */}
            <div className='m-2 p-2 position-relative box-shedow'>
              {/* <h4>test4</h4> */}
              <div className=' mx-5'>
                <p>{product.name}</p>
                <div className='text-center'>
                  <img src={product.imageURL} alt="" className='product-img' />
                </div>
              </div>
              <div className='product-action'>
                <h2>{product.price} Rs</h2>
                <div className='d-flex'> 
                  <button className='btn btn-primary mx-2'>Add To Cart</button>
                  <button className='btn btn-primary'>View</button>
                </div>
              </div>
           </div>
          </div>
        })}
        </div>
      </div>


    </Layout>
  )
}

export default Homepage