import {useDispatch} from "react-redux";
import {useState} from "react";
import {removeProduct, updateProduct} from "../reducers/productSlice";
import {Link} from "react-router-dom";

/**
 * Компонент, отображающий карточку товара
 * @param product
 * @returns {JSX.Element}
 * @constructor
 */
const ProductComponent = ({product}) => {
    const [availableProduct, setAvailable] = useState(product.available);
    const dispatch = useDispatch();

    /**
     * Обновления свойства available
     */
    const switchAvailable = () => {
        setAvailable(!availableProduct);
        dispatch(updateProduct(product));
    };

    const deleteProduct = () => {
        dispatch(removeProduct(product.id));
    };

    return (
        <div className="product">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p>$ {product.price}</p>
            <div className="product-available">
                {availableProduct ? (
                    <p style={{color: "blue"}}>Available</p>
                ) : (
                    <p style={{color: "red"}}>Not Available</p>
                )}
                <button onClick={() => switchAvailable()}>switch</button>
            </div>
            <div className="product-buttons">
                <Link to={`/edit/${product.id}`}>edit</Link>
                <button onClick={deleteProduct}>delete</button>
            </div>
        </div>
    );
};

export default ProductComponent;