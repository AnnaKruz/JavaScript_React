import {fireEvent, render, screen} from "@testing-library/react";
import Header from "../../components/Header";
import ProductsProvider from "../../components/ProductsProvider";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const renderedComponent = () => render(
    <ProductsProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>
        </Router>
    </ProductsProvider>
);

describe('Header tests', () => {
    test('Header render test', () => {
        renderedComponent();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Add')).toBeInTheDocument();
    });

    test('Header links test', () => {
        renderedComponent();
        const addLink = screen.getByText('Add');
        fireEvent.click(addLink);
        expect(document.location.pathname).toEqual('/add');
    });
});