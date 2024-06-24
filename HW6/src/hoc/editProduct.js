import {useParams} from "react-router-dom";
import AddProduct from "../components/AddProduct";
import {useSelector} from "react-redux";

/**
 * Вызов формы ввода данных товара для редактирования
 * @returns {function(*): *}
 */
const editProduct = () => {
    return () => {
        // Получение id из параметров пути
        const {id} = useParams();
        // Получение списка товаров
        const products = useSelector(state => state.product.productList);
        // Поиск нужного товара по id
        const editedProduct = products.find(p => p.id === parseInt(id));

        return <AddProduct product={editedProduct}/>;
    }
};

const EditProduct = editProduct();

export default EditProduct;