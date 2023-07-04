import { combineReducers } from "redux";
import burgerReducer from "./burger/burgerReducer";
import icecreamReducer from "./icecream/icecreamReducer";

const rootReducer = combineReducers({
  burger: burgerReducer,
  icecream: icecreamReducer,
});

export default rootReducer;
