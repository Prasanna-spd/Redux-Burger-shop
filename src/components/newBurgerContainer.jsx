import { React, useState } from "react";
import { connect } from "react-redux";
import { buyBurger } from "../redux/burger/burgerActions";

function NewBurgerShop(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number Of Burger - {props.numOfBurgers} </h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyBurger(number)}>
        Buy {number} Burger
      </button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    numOfBurgers: state.burger.numOfBurgers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBurger: (number) => dispatch(buyBurger(number)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(NewBurgerShop);
