import React from 'react'
import Product from '../../product'

export default function index() {
  return (
   
        <div class="card bg-dark text-bg-dark border-0">
         <img src={require("../../../assets/bg.jpg")}  class="card-img" alt="Background"/>
          <div class="card-img-overlay">
         <h2 class="card-title" style={{fontSize:75, margin:60, color:"black"}}>New Collections</h2>
         <p class="card-text" style={{color:"black", marginLeft:50, fontSize:25}}>The most popular products are waiting for you.</p>
         <p class="card-text" style={{color:"black", marginLeft:50, fontSize:15}}>This summer's favorite.</p>
         </div>
      </div>

  )
}
