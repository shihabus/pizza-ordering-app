import { UPDATE_SIZE, UPDATE_CRUST, UPDATE_TOPPINGS } from "./actionTypes";

export const updatePizzaSize = (dispatch, payload) =>
  dispatch({ type: UPDATE_SIZE, payload: { ...payload, key: "size" } });

export const updatePizzaCrust = (dispatch, payload) =>
  dispatch({ type: UPDATE_CRUST, payload: { ...payload, key: "crust" } });

export const updatePizzaToppings = (dispatch, payload) =>
  dispatch({ type: UPDATE_TOPPINGS, payload: { ...payload, key: "toppings" } });
