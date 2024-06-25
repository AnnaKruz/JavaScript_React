import ShopRouter from "./components/ShopRouter";
import {Provider} from "react-redux";
import store from "./modules/store";

function App() {
    return (
        <Provider store={store}>
            <ShopRouter/>
        </Provider>
    );
}

export default App;
