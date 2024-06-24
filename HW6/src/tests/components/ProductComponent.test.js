import {screen, render} from "@testing-library/react";
import Product from "../../entity/product";
import ProductComponent from "../../components/ProductComponent";
import {Provider} from "react-redux";
import productStore from "../../store/productStore";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

describe("ProductComponent tests", () => {
    test("renders correctly", () => {
        const testProduct = new Product('Test', 'some text', 100500);
        render(
            <Provider store={productStore}>
                <Router>
                    <Routes>
                        <Route path="/" element={<ProductComponent product={testProduct} />} />
                    </Routes>
                </Router>
            </Provider>
        );
        expect(screen.getByText('Test')).toBeInTheDocument();
        expect(screen.getByText('some text')).toBeInTheDocument();
        expect(screen.getByText('$ 100500')).toBeInTheDocument();
        expect(screen.getByText('Available')).toBeInTheDocument();
    });
});