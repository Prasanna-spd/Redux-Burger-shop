import { createStore } from "redux";
import burgerReducer from "./burger/burgerReducer";

const store = createStore(burgerReducer);

export default store;
