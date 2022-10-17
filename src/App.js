import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Product from './components/product'
import Products from './components/product/productItem/'
import Checkout from './pages/checkout'
import Home from "./pages/Home";
import Cart from './pages/cart'

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                 <Home />
                </Route>
                 <Route path="/products" component={Product}/>
                 <Route path="/product/:id" component={Products}/>
                 <Route path="/checkout" component={Checkout}/>
                 <Route path="/cart" component={Cart}/>
            </Switch>
        </Layout>
    );
}

export default App;
