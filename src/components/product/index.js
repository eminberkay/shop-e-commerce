import { data } from 'autoprefixer';
import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getData } from '../../database/redux/actions'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Index(props) {

  const [filters, setFilters] = useState(0)
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {

    props.getData()
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  

  const Product = useCallback(() => {

    return(
      
         props?.data?.filter((a) =>
          filters != 0
            ? a.categories[0].id == filters 
            : a.categories[0].id).map((data) => {
        return(
         <div className="col-md-3 mb-4 align-center">
            <div class="h-200 text-center" key={data.id}>
           <div>
           <Link to={{
             pathname:`/product/${data?.id}`,
             state:{data}
             }}>
           <button class="border-0 btn btn-outline-dark">
          <img src={data?.images[0].src} width="200px" height="190px" class="card-img-top"/>
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
      })
    )
  },[props?.data, filters])

  const ShowProduct = useCallback(() => {

    return(
     
      <div className="buttons">
          <button onClick={() => setFilters(0)} class="btn btn-outline-dark me-3">All</button>
          <button onClick={() => setFilters(32 || 30)} class="btn btn-outline-dark me-3">Women</button>
          <button onClick={() => setFilters(19)} class="btn btn-outline-dark me-3">Men</button>
      </div>

    )
  },[filters])

  const Loading = useCallback(() => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={240}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={240}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={240}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={240}/>
        </div>
      </>
    )
  },[loading])




  return (
    <div className="container py-5 my-0">
      <div className="text-center">
        <h2>Shop</h2>
        <div>
         <ShowProduct/>
       </div>
      </div>
      <div className="container row py-5">
      {loading ? <Loading/> : <Product/>}
      </div>
   </div>
  )
}
const mapStateToProps = state => {

  return{
      data: state.data
  }

}
export default connect(mapStateToProps, {getData})(Index);
