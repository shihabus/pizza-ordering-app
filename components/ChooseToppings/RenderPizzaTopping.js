import PropTypes from "prop-types";

import pizzaToppingInfo from "data/pizzaToppingsInfo.json";
import { getPizzaImageScaleSelector } from "hooks/orderContext/selectors";
import { useOrderContext } from "hooks/orderContext";

import PizzaRenderer from "components/shared/PizzaRenderer";

function RenderPizzaTopping({ toppings }) {
  // mocking selection
  const lastItem = toppings[toppings?.length - 1];

  const [state] = useOrderContext();
  const scale = getPizzaImageScaleSelector(state);
  const { image = "/assets/images/chooseToppings/pizzaPlain.png" } =
    pizzaToppingInfo?.[lastItem] || {};

  return <PizzaRenderer scale={scale} image={image} />;
}

RenderPizzaTopping.propTypes = {
  toppings: PropTypes.array.isRequired,
};

export default RenderPizzaTopping;
