
import './App.css';
import Conversion from "./components/Conversion";
import TodoList from "./components/TodoList";
import {Route, Routes} from "react-router";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="conversion" element={<Conversion/>}/>
                    <Route path="todolist" element={<TodoList/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
