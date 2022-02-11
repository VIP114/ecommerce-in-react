import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaTrash} from 'react-icons/fa'
import Layout from '../components/Layout'
import { type } from '@testing-library/user-event/dist/type'

function CartPage() {
  const {cartItems} = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const[totalAmount,setTotalAmount]= useState(0)
  useEffect(()=>{
    let temp=0;
    cartItems.forEach((cartItems)=>{
      temp= temp +cartItems.price
    })
    setTotalAmount(temp)
  },[cartItems])

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems])

  const deleteFromCart=(product)=>{
    dispatch({type:'DELETE_FROM_CART',payload:product})
  }


  return (
    <Layout>
        <h1>cartpage page</h1>
        <table className='table mt-2'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item=>{
              return(
                <tr>
                  <th><img src={item.imageURL} height='90' width='90'/></th>
                  <th>{item.name}</th>
                  <th>{item.price}</th>
                  {/* <th>{item.price}</th> */}
                  <th><FaTrash onClick={()=>deleteFromCart(item)} /></th>
                </tr>
              )
            })}

          </tbody>

        </table>
        <div className='d-flex justify-content-end'>
          <h1>
            Total Amount:- {totalAmount} Rs/-
          </h1>
        </div>
    </Layout>
  )
}

export default CartPage