import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import App from "../App";
import Header from "../components/Header";

describe("App tests", () => {
    test("App add new Product test", async () => {
        render(<App/>);
        const addLink = screen.getByText("Add");
        expect(document.location.pathname).toBe('/');
        expect(screen.getByText("Samsung")).toBeInTheDocument();
        expect(screen.getByText("iPhone")).toBeInTheDocument();
        // eslint-disable-next-line testing-library/no-node-access
        let products = document.querySelectorAll('.product');
        expect(products.length).toBe(4);
        fireEvent.click(addLink);
        expect(document.location.pathname).toBe('/add');
        screen.getByPlaceholderText('Product Name').innerText = 'New Product';
        screen.getByPlaceholderText('Description').innerText = 'New Description';
        screen.getByLabelText('Price').innerText = '1000';
        const btn = screen.getByText('Complete');
        fireEvent.click(btn);
        expect(screen.getByText("Product added")).toBeInTheDocument()
        const homeLink = screen.getByText("Home");
        fireEvent.click(homeLink);
        expect(document.location.pathname).toBe('/');
        // eslint-disable-next-line testing-library/no-node-access
        products = document.querySelectorAll('.product');
        expect(products.length).toBe(5);
    });

    test("App use switch test", () => {
        render(<App/>);
        // eslint-disable-next-line testing-library/no-node-access
        const availableContainer = document.querySelector('.product-available');
        // eslint-disable-next-line testing-library/no-node-access
        const availableLabel = availableContainer.querySelector('p');
        // eslint-disable-next-line testing-library/no-node-access
        const availableSwitchBtn = availableContainer.querySelector('button');
        expect(availableLabel.innerHTML).toEqual('Available');
        fireEvent.click(availableSwitchBtn);
        expect(availableLabel.innerHTML).toEqual('Not Available');
    });
});