import { BUY_BURGER } from "./burgerType";

const initialState = {
  numOfBurgers: 10,
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BURGER:
      return {
        ...state,
        numOfBurgers: state.numOfBurgers - action.payload,
      };

    default:
      return state;
  }
};

export default burgerReducer;
