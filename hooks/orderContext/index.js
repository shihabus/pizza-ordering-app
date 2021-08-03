import React from "react";

import { UPDATE_SIZE, UPDATE_CRUST, UPDATE_TOPPINGS } from "./actionTypes";

const OrderContext = React.createContext();

const initialState = {
  size: {},
  crust: {},
  toppings: [],
  orderTotal: 0,
};

// if customization already exist
// subtract its price and add the new one
function calculateOrderTotal(state = {}, key = "", price = 0) {
  const currentTotal = state.orderTotal;
  const amountToDecrement = state[key]?.price || 0;
  return currentTotal + price - amountToDecrement;
}

// subtract old toppings cost and add the new one
function calculateToppingsPrice(currentState, newToppings) {
  const currentTotal = currentState.orderTotal;

  const toppingPriceReducer = (acc, topping) => acc + topping?.price;

  const newToppingPrice = newToppings?.reduce(toppingPriceReducer, 0);

  const oldToppingPrice = currentState.toppings?.reduce(toppingPriceReducer, 0);

  return currentTotal + newToppingPrice - oldToppingPrice;
}

function OrderContextProvider({ ...props }) {
  let orderTotal = 0;
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case UPDATE_SIZE:
          orderTotal = calculateOrderTotal(
            state,
            action.payload?.key,
            action.payload?.price
          );
          return { ...state, size: action.payload, orderTotal };
        case UPDATE_CRUST:
          orderTotal = calculateOrderTotal(
            state,
            action.payload?.key,
            action.payload?.price
          );
          return { ...state, crust: action.payload, orderTotal };
        case UPDATE_TOPPINGS:
          orderTotal = calculateToppingsPrice(state, action.payload.toppings);
          return { ...state, toppings: action.payload.toppings, orderTotal };
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
