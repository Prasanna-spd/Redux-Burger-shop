import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import BurgerShop from "./components/burgerContainer";
import HooksBurgerContainer from "./components/hooksBurgerContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BurgerShop />
        <HooksBurgerContainer />
      </div>
    </Provider>
  );
}

export default App;
