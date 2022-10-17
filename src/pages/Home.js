import React, { useEffect } from "react";
import TopPic from '../components/widgets/top-pic'
import Product from '../components/product'
import Products from '../components/product/productItem/index'
import Checkout from './checkout'
import Cart from './cart'
import { connect } from 'react-redux';
import { getData } from '../database/redux/actions'
import { Switch, Route } from 'react-router-dom'
   

const Home = (props) => {
   
    useEffect(() => {
        props.getData()
    }, [])
    

    return (

        <div>
            <Switch>
                <Route exact path="/" component={TopPic}/>
                <Route exact path="/products" component={Product}/>
                <Route exact path="/products/:id" component={Products}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/checkout" component={Checkout}/>
            </Switch>
         <Product/>
        </div>
    
    )
};
const mapStateToProps = state => {

    return{
        data: state.data
    }

}
export default connect(mapStateToProps, {getData})(Home);
