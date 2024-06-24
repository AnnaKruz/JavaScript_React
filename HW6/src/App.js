import './App.css';
import ProductsProvider from "./components/ProductsProvider";
import ProductRouter from "./components/ProductRouter";

function App() {
    return (
        <ProductsProvider>
            <ProductRouter/>
        </ProductsProvider>
    );
}

export default App;
