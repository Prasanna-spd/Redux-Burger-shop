import { BUY_BURGER } from "./burgerType";

export const buyBurger = (number = 1) => {
  return {
    type: BUY_BURGER,
    payload: number,
  };
};
