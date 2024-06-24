import './App.css';
import {Provider} from "react-redux";
import store from "./modules/store";
import ThemeContainer from "./components/ThemeContainer";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeContainer>
            <h1>Switch Theme</h1>
            <ThemeSwitcher/>
        </ThemeContainer>
      </Provider>
    </div>
  );
}

export default App;
