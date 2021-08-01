import React from "react";
import { UPDATE_SIZE, UPDATE_CRUST, UPDATE_TOPPINGS } from "./actionTypes";

const OrderContext = React.createContext();

// add initialState
const initialState = {
  size: {},
  crust: {},
  toppings: [],
  orderTotal: 0,
};

// if customization already exist
// decrease its price and add the new one
function calculateOrderTotal(state = {}, key = "", price = 0) {
  const amountToDecrement = state[key]?.price || 0;
  const currentTotal = state.orderTotal;
  return currentTotal + price - amountToDecrement;
}

// if topping is already added remove it
// if not, add it
function updateToppingHelper(state, topping) {}

function OrderContextProvider({ ...props }) {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      let orderTotal = calculateOrderTotal(
        state,
        action.payload?.key,
        action.payload?.price
      );
      switch (action.type) {
        case UPDATE_SIZE:
          return { ...state, size: action.payload, orderTotal };
        case UPDATE_CRUST:
          return { ...state, crust: action.payload, orderTotal };
        case UPDATE_TOPPINGS:
          return { ...state, crust: action.payload, orderTotal };
        default:
          return { ...state };
      }
    },
    { ...initialState }
  );

  const value = [state, dispatch];
  return <OrderContext.Provider value={value} {...props} />;
}

function useOrderContext() {
  const context = React.useContext(OrderContext);
  if (!context) {
    throw new Error(`useOrderContext must be within a <OrderContextProvider/>`);
  }
  return context;
}

export { OrderContextProvider, useOrderContext };
