import {useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";

/**
 * Компонент, отображающий список товаров
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ProductList = () => {
    const products = useSelector(state => state.product.productList);

    return (
        <ul className="products">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductComponent product={product}/>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;