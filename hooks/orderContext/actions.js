import { UPDATE_SIZE, UPDATE_CRUST, UPDATE_TOPPINGS } from "./actionTypes";

const updatePizzaSize = (dispatch, payload) =>
  dispatch({ type: UPDATE_SIZE, payload: { ...payload, key: "size" } });

const updatePizzaCrust = (dispatch, payload) =>
  dispatch({ type: UPDATE_CRUST, payload: { ...payload, key: "crust" } });

const updatePizzaToppings = (dispatch, toppings) =>
  dispatch({ type: UPDATE_TOPPINGS, payload: { toppings, key: "toppings" } });

export { updatePizzaSize, updatePizzaCrust, updatePizzaToppings };
