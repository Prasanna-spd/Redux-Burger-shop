import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBurger } from "../redux/burger/burgerActions";

function HooksBurgerContainer() {
  const numOfBurgers = useSelector((state) => state.burger.numOfBurgers);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>for hooks Number Of Burgers - {numOfBurgers} </h2>
      <button
        onClick={() => {
          dispatch(buyBurger());
        }}
      >
        Buy Burger
      </button>
    </div>
  );
}

export default HooksBurgerContainer;
