import React from "react";
import { connect } from "react-redux";
import { buyBurger } from "../redux/burger/burgerActions";

function BurgerShop(props) {
  return (
    <div>
      <h2>Number Of Burger - {props.numOfBurgers} </h2>
      <button onClick={props.buyBurger}>Buy Burger</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    numOfBurgers: state.numOfBurgers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBurger: () => dispatch(buyBurger()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(BurgerShop);
