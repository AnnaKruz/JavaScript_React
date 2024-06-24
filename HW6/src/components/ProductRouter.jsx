import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import Header from "./Header";
import EditProduct from "../hoc/editProduct";

/**
 * Роутер продуктов
 * @returns {JSX.Element}
 * @constructor
 */
const ProductRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Header/>}>
                    <Route path='/' element={<ProductList/>}/>
                    <Route path='/add' element={<AddProduct/>}/>
                    <Route path='/edit/:id' element={<EditProduct/>}/>
                </Route>
            </Routes>
        </Router>
    );
};

export default ProductRouter;