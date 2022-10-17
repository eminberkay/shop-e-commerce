
const INITIAL_STATE = {
  data:[],
  basket:[]
}

export const reducer = (state = INITIAL_STATE, action) => {
    const control = state.basket.find((a) => a.id == action.payload.id)
    switch(action.type){
      case "GET_DATA" : 
            return { ...state, data: action.payload}
      
      case "ADD_CART" : 
      //localstorage ile refresh esnasında kalıcılığı korunabilir && database..
        if (control){
           const checker =  state.basket.findIndex((a) =>  a.id == action.payload.id)
           const index = state.basket[checker]
           let updatedProduct = { ...index, qty: index.qty +1};
            return {basket : [...state.basket.slice(0, checker), ...state.basket.slice(checker + 1), updatedProduct]}          
          } else {
            return { ...state, basket: [...state.basket, action.payload] }
          }

      case "DEL_CART" : 
      if (control){
        const checker =  state.basket.findIndex((a) =>  a.id == action.payload.id)
        const index = state.basket[checker]
        let updatedProduct = { ...index, qty: index.qty -1};
          if(index.qty <= 1){
            return { basket: state.basket.filter((product) => product.id !== action.payload.id)}
          }
            return {basket : [...state.basket.slice(0, checker), ...state.basket.slice(checker + 1), updatedProduct]}
          } 

      case "REMOVE_CART" : 
       if (control){
        return { basket: state.basket.filter((product) => product.id !== action.payload.id)}
          } 

 
          default: 
            return state;
    }
    
}
