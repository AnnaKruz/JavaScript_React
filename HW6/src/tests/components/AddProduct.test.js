import AddProduct from "../../components/AddProduct";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider, useSelector} from "react-redux";
import productStore from "../../store/productStore";
import {initialState} from "../../initialState";
import Product from "../../entity/product";

const renderedComponent = () => render(
    <Provider store={productStore}>
        <AddProduct data-testid="addProduct"/>
    </Provider>
);

describe('AddProduct tests', () => {
    test('AddProduct render test', () => {
        renderedComponent();
        expect(screen.getByTestId('addProduct')).toBeInTheDocument();
    });

    test('AddProduct input find test', () => {
        renderedComponent();
        expect(screen.getByPlaceholderText('Product Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
        expect(screen.getByLabelText('Price')).toBeInTheDocument();
        expect(screen.getByText('Complete')).toBeInTheDocument();
    });

    test('AddProduct add test', () => {
        renderedComponent();
        screen.getByPlaceholderText('Product Name').innerText = 'New Product';
        screen.getByPlaceholderText('Description').innerText = 'New Description';
        screen.getByLabelText('Price').innerText = '1000';
        const btn = screen.getByText('Complete');
        fireEvent.click(btn);
        expect(screen.getByText('Product added')).toBeInTheDocument();
    });

    test('AddProduct update test', () => {
        render(
            <Provider store={productStore}>
                <AddProduct data-testid="addProduct" product={new Product('Test', "Test", 1)}/>
            </Provider>
        );
        screen.getByPlaceholderText('Product Name').innerText = 'New Product';
        screen.getByPlaceholderText('Description').innerText = 'New Description';
        screen.getByLabelText('Price').innerText = '1000';
        const btn = screen.getByText('Complete');
        fireEvent.click(btn);
        expect(screen.getByText('Product updated')).toBeInTheDocument();
    });
});