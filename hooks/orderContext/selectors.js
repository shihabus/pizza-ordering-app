import { isEmptyObject } from "Utils/objectUtil";

export const getPizzaSizeSelector = (state) => state.size;
export const getPizzaImageScaleSelector = (state) => state.size?.scale || 1;
export const getPizzaCrustSelector = (state) => state.crust;
export const getPizzaToppingSelector = (state) => state.toppings;
export const getOrderTotalSelector = (state) => state.orderTotal;

export const getOrderSummarySelector = (state) => {
  const summary = [];
  const size = getPizzaSizeSelector(state);
  if (!isEmptyObject(size)) {
    summary = [...summary, { label: `${size} Size`, cost: size.price }];
  }
  const crust = getPizzaCrustSelector(state);
  if (!isEmptyObject(crust)) {
    summary = [...summary, { label: `${crust} Crust`, cost: crust.price }];
  }
  const toppings = getPizzaToppingSelector(state);
  const toppingInfo = toppings?.map((topping) => ({
    label: topping,
    cost: topping.price,
  }));
  summary = [...summary, ...toppingInfo];
  return summary;
};
