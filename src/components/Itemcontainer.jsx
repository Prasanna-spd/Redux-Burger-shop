import React from "react";
import { connect } from "react-redux";
import { buyBurger } from "../redux/burger/burgerActions";
import { buyIcecream } from "../redux/icecream/icecreamAction";

function ItemContainer(props) {
  return (
    <>
      <h2>Item - {props.item}</h2>
      <div>
        <button onClick={props.buyItem}>Buy Items</button>
      </div>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.burger
    ? state.burger.numOfBurgers
    : state.icecream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.burger
    ? () => dispatch(buyBurger())
    : () => dispatch(buyIcecream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
