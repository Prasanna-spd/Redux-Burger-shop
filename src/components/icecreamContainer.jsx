import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from "../redux/icecream/icecreamAction";

function IcecreamShop(props) {
  return (
    <div>
      <h2>Number Of Icecreams - {props.numOfIceCreams} </h2>
      <button onClick={props.buyIcecream}>Buy Icecream</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    numOfIceCreams: state.icecream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(IcecreamShop);
