import {Provider} from "react-redux";
import productStore from "../store/productStore";

const ProductsProvider = (props) => {

    return (
        <Provider store={productStore}>
            {props.children}
        </Provider>
    );
};

export default ProductsProvider;