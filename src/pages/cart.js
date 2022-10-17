import React, {useCallback, useEffect} from 'react'
import { connect, useDispatch } from 'react-redux';
import { addCart, delCart, removeCart } from '../database/redux/actions'
import { Link, useHistory } from 'react-router-dom'

function Cart(props) {

     const dispatch = useDispatch()
     const history = useHistory();


     const Status = useCallback(() => {
          return(
           <div style={{backgroundColor:"#ededed", padding:15}} class="d-flex">
               <div style={{fontSize:14, fontWeight:"300", marginRight:10}} class="p-2 flex-grow-1">Product</div>
               <div style={{fontSize:14, fontWeight:"300", marginRight:30}} class="p-2">Price</div>
               <div style={{fontSize:14, fontWeight:"300", marginRight:30}} class="p-2">Quantity</div>
               <div style={{fontSize:14, fontWeight:"300", marginRight:10}} class="p-2">Total</div>
           </div>
           )
     },[])

     const Product = useCallback(() => {

        return(
          props?.basket?.reverse().filter((a) => a.id).map((a) =>
               <div key={a.id} style={{display:"flex", alignItems:"center"}} aria-multiline="true" class="py-3">
                    <div class="col-md-1.2">
                     <img src={a.images[0].src} width="30px" height="95px" class="card-img-top"/>
                    </div>
                    <h7 style={{marginLeft:20, fontSize:14, fontWeight:"600", width:200}} class="p-2 flex-grow-1">{a.name}</h7>
                    <h7 style={{marginLeft:20, fontSize:14, fontWeight:"300"}} class="p-2">${a.price}</h7>
                   <button style={{marginLeft:15}} className="border-0">
                   <button style={{fontWeight:"700",}} onClick={() => dispatch(delCart({data:a, qty:a?.qty}))} type="button" class="btn border-0 btn-outline-secondary">-</button>
                    <h7 style={{fontSize:14, fontWeight:"300"}} class="p-2">{a.qty}</h7>
                    <button style={{fontWeight:"700"}} onClick={() => dispatch(addCart({data:a, qty:a?.qty}))} type="button" class="btn border-0 btn-outline-secondary">+</button>
                   </button>
                    <h7 style={{marginLeft:10, fontSize:14, fontWeight:"300"}} class="p-2">${Math.floor((a.price) * (a.qty))}</h7>
                    <button onClick={() => dispatch(removeCart({data:a}))} type="button" 
                    style={{marginLeft:20, fontSize:10, fontWeight:"700", marginRight:-40}}
                    class="btn border-1 btn-outline-secondary">X</button>
                </div>
                 )
        )
          
     },[props?.basket])

  return (

       <div className="col-md-8 py-5">
         <div style={{marginBottom:30}}>
           <h4 style={{fontWeight:"700", marginLeft:20}}>Cart</h4>
         </div>
          <Status/>
           <Product/>
          {props?.basket.length > 0
          ? <div className="row" style={{margin:20, paddingBottom:20}}>
               <button onClick={() => history.push(`/checkout`, {data:props?.basket})} style={{fontSize:14, fontWeight:"200"}} type="button" class="btn btn-dark">PROCEED TO CHECKOUT</button>
               </div> 
          : null
          }     
    </div>

  )
}
const mapStateToProps = state => {

     return{
         basket: state.basket
     }
   
   }
export default connect(mapStateToProps, {addCart, delCart, removeCart})(Cart);
   