import React from 'react'

 function Checkout(props) {

     const data = props.location.state?.data

     const Status = () => {
          return(
           <div style={{backgroundColor:"#ededed", padding:15, marginBottom:20}} class="d-flex">
               <div style={{fontSize:14, fontWeight:"300", marginRight:10}} class="p-2 flex-grow-1">Product</div>
                 <div style={{fontSize:14, fontWeight:"300", marginRight:10}} class="p-2">Total</div>
           </div>
           )
     }

     const PageForm = () => {

          return(
                <div className="py-3">
                <h5>Checkout</h5>
                 <div class="col py-2">
                 <p-table style={{fontSize:12, fontWeight:"300"}}>Email *</p-table>
                <input type="text" class="form-control" placeholder="e-mail@examle.com" aria-label="email"/>
                </div>
                <div class="row">
                  <div class="col">
                  <p-table style={{fontSize:12, fontWeight:"300"}}>Fist Name *</p-table>
                <input type="text" class="form-control" placeholder="John" aria-label="First name"/>
                </div>
                <div class="col">
                 <p-table style={{fontSize:12, fontWeight:"300"}}>Last Name *</p-table>
                <input type="text" class="form-control" placeholder="Doe" aria-label="Last name"/>
                </div>
               </div>
               </div>
               
          )
     }
     
     const FormItem = () => {
          return (
               data.map((a) => 
                    
                <div>
                    <div className="d-flex">
                      <h5 style={{fontSize:13, fontWeight:"400"}}
                      class="p-2 flex-grow-1">{a.name} x {a.qty}</h5>
                      <h5 style={{fontSize:13, fontWeight:"400"}}
                      class="p-2"> ${a.qty * a.price}</h5>
                    </div>
                </div>

                   
               )
          )
     }

     const Total = () => {

          const response = data.reduce((total, item) => total+item.price * item.qty,0)
 
          return(
               
               <div>
                   <div className="d-flex">
                     <h5 style={{fontSize:13, fontWeight:"700"}}
                     class="p-2 flex-grow-1">Total</h5>
                     <h5 style={{fontSize:13, fontWeight:"700"}}
                     class="p-2"> ${response}</h5>
                   </div>
                   <div className="row" style={{margin:20, paddingBottom:20}}>
                 <button onClick={() => null} style={{fontSize:14, fontWeight:"200"}} type="button" class="btn btn-dark">CONFIRM PURCHASE</button>
               </div> 
               </div>

          )
     }

  return (
     <div className="col-md-5 py-8 my-4">
           <PageForm/>
            <Status/>
           <FormItem/>
           <Total/>

     </div>
  )
}
export default Checkout;