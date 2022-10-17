import { data } from 'autoprefixer';
import React, { useState, useEffect, useCallback } from 'react'
import { connect, useDispatch } from 'react-redux';
import { addCart, getData, delCart } from '../../../database/redux/actions'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Index(props) {

     
     const dispatch = useDispatch()
     const [loading, setLoading] = useState(true)
     const data = props.location.state.data
     const qty = props?.basket.map((a) => a?.qty)
     const checker =  props?.basket.findIndex(a =>  a.id == data.id)
     const productqty = qty[checker]

     useEffect(() => {
    
      props.getData()
      setTimeout(() => {
       setLoading(false)
     }, 1000);
    
     }, [])

  
     
     const ProductImage = () => {
       return(
        <div class="col-md-4 py-2 m-3">
          <img src={data.images[0].src} height="290px" class="card-img-top"/>
       </div>
       )
     }

     const Loading = useCallback(() => {
      return (
        <>
          <div key={data.id} className="row justify-content-center align-self-center">
                   <Skeleton width={350}/>
                    <div class="col-md-5 m-3" role="group">
                       <div>
                         <Skeleton width={100}/>
                        <Skeleton width={100}/>
                       </div>
                       <Skeleton width={100}/>
                    <div style={{marginTop:20, marginBottom:20}}>
                     <Skeleton width={100}/>
                     <Skeleton width={100}/>
                         </div>
                         <Skeleton width={100}/>
                       <div class="square border border-dark btn-group m-3" role="group" aria-label="First group">
                            <Skeleton width={350}/>
                         </div>
                    </div>
                   
                   </div>




        </>
      )
     },[loading])

     const ProductDescription = () => {
       return(
        <div class="col-md-5 m-3" role="group">
          <div>
            <h8 style={{fontWeight:"200", fontSize:14}}>{"Shop > "}</h8>
            <h8 style={{fontWeight:"200", fontSize:14}}>{data.categories[1].name}</h8>
          </div>
          <p-table style={{marginTop:10, fontSize:24, fontWeight:"500"}}>{data.name}</p-table>
          <div style={{marginTop:20, marginBottom:20}}>
            <p-table style={{color:"grey", fontSize:15, fontWeight:"300", marginRight:10}} class="card-text">
            ${parseInt(data.price)+20.95}</p-table>
            <p-table style={{fontSize:15, fontWeight:"400"}} class="card-text">
            ${data.price}</p-table>
            </div>
         <h6 style={{fontSize:13, marginTop:5, fontWeight:"300", marginBottom:30}} class="card-title">
          {data.short_description.substring(3,180)}</h6>
          <div class="square border border-dark btn-group m-3" role="group" aria-label="First group">
            <button type="button" class="btn border-0 btn-outline-secondary">-</button>
            <button type="button" class="btn border-0">{data?.qty ? data?.qty : 0}</button>
            <button onClick={() => dispatch(addCart({data:data, qty:1}))} type="button" class="btn border-0 btn-outline-secondary">+</button>
            <button type="button" class="btn btn-dark">ADD TO CART</button>
            </div>
       </div>
    
       )
     }

     const ShowProduct = () => {
    
               
              return(
                <div key={data.id} className="row">
                   <ProductImage/>
                    <div class="col-md-5 m-3" role="group">
                       <div>
                         <p-table style={{fontWeight:"200", fontSize:13}}>{"Shop > "}</p-table>
                         <button className="border-0">
                         <p-table  style={{fontWeight:"200", fontSize:13}}>{data.categories[1].name}</p-table> 
                   
                         </button>
                             </div>
                    <p-table style={{marginTop:10, fontSize:24, fontWeight:"500"}}>{data.name}</p-table>
                    <div style={{marginTop:20, marginBottom:20}}>
                         <p-table style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', color:"grey", fontSize:15, fontWeight:"300", marginRight:10}} class="card-text">
                         ${parseInt(data.price)+20.95}</p-table>
                         <p-table style={{fontSize:15, fontWeight:"400"}} class="card-text">
                         ${data.price}</p-table>
                         </div>
                    <h6 style={{fontSize:13, marginTop:5, fontWeight:"300", marginBottom:20}} class="card-title">
                       {data.short_description.substring(3,180)}</h6>
                       <div class="square border border-dark btn-group m-1" role="group" aria-label="First group">
                         <button onClick={() => dispatch(delCart({data:data, qty:-1}))} type="button" class="btn border-0 btn-outline-secondary">-</button>
                         <button type="button" class="btn border-0">{productqty ? productqty : 0 }</button>
                         <button onClick={() => dispatch(addCart({data:data, qty:1}))} type="button" class="btn border-0 btn-outline-secondary">+</button>
                         <button type="button" class="btn btn-dark">ADD TO CART</button>
                         </div>
                    </div>
                   </div>
              )
          
     }

     const RelatedProducts = useCallback(() => {

      return(
        
           <div className="row">
           <p-table style={{
             marginLeft:15, 
             marginBottom:30, 
             fontSize:20,
             fontWeight:"700",
             marginTop:50}}>Related Products</p-table>
             {props?.data?.filter((a) =>
             data
              ? a.categories[0].id == data.categories[0].id
              : a.categories[0].id).map((data) => {
          return(
           <div className="col-md-3 mb-2 align-center">
              <div class="h-200 text-center" key={data.id}>
             <div>
             <Link to={{
               pathname:`/product/${data?.id}`,
               state:{data}
               }}>
             <button class="border-0 btn btn-outline-dark">
             <img src={data?.images[0].src} width="160px" height="150px" class="card-img-top"/>
             <div class="card-body">
              <p style={{fontSize:14, marginTop:5, fontWeight:"700"}} class="card-title">
              {data.name}</p>
             <div class="container">
              <p-table style={{color:"grey", textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize:14, fontWeight:"300", marginRight:10}} class="card-text">
                ${parseInt(data.price)+20.95}</p-table>
              <p-table style={{fontSize:14, fontWeight:"400"}} class="card-text">
                ${data.price}</p-table>
             </div>
              </div>
              </button>
              </Link>
             </div>
            </div> 
         
          </div>
          )
        })}
           </div>
      )
    },[])
  


  return (
    
         <div className="container py-5  my-3 col-md-10 justify-content-center">
           <ShowProduct/>
            <div className="row">
             <RelatedProducts/>
           </div>
         </div>
  )
}
const mapStateToProps = state => {

     return{
         basket: state.basket,
         data: state.data
     }
   
   }
   export default connect(mapStateToProps, {addCart, delCart, getData})(Index);
   