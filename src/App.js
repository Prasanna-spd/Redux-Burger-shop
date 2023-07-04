import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import BurgerShop from "./components/burgerContainer";
import HooksBurgerContainer from "./components/hooksBurgerContainer";
import IcecreamContainer from "./components/icecreamContainer";
import NewBurgerContainer from "./components/newBurgerContainer";
import Itemcontainer from "./components/Itemcontainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Itemcontainer burger />
        <Itemcontainer />
        <BurgerShop />
        <HooksBurgerContainer />
        <IcecreamContainer />
        <NewBurgerContainer />
      </div>
    </Provider>
  );
}

export default App;
