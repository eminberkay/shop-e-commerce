const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

export const getData = () => dispatch => {
  
  try {
   
    const WooCommerce = new WooCommerceRestApi({
      url: 'https://shop-interview.acrowd.se/', 
      consumerKey: 'ck_0a59cfe8b7a465f6447d3cc12ae29ed8e5974a83',
      consumerSecret: 'cs_2134e3a616a6bd2c50811fd867b2628157152bac',
      version: 'wc/v3',
      queryStringAuth: true
      });

    WooCommerce.get("products")
    .then((response) => {
     
      dispatch({type: 'GET_DATA', payload:response.data})
    })
    .catch((error) => {
      console.log(error.response.data);
    });

       
  } catch (error) {
    
  }
 
}

export const addCart = (data) => dispatch => {
  
  try {

    const response = {...data.data, qty:data.qty}
   
    dispatch({type: 'ADD_CART', payload:response})

       
  } catch (error) {
    
  }
 
}
export const delCart = (data) => dispatch => {
  
  try {

    const response = {...data.data, qty:data.qty}
   
    dispatch({type: 'DEL_CART', payload:response})

       
  } catch (error) {
    
  }
 
}
export const removeCart = (data) => dispatch => {
  
  try {

    const response = {...data.data, qty:data.qty}
   
    dispatch({type: 'REMOVE_CART', payload:response})

       
  } catch (error) {
    
  }
 
}