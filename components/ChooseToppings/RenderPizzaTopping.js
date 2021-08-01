import PizzaRenderer from "components/shared/PizzaRenderer";
import pizzaToppingInfo from "data/pizzaToppingsInfo.json";
import { getPizzaImageScaleSelector } from "hooks/orderContext/selectors";
import { useOrderContext } from "hooks/orderContext";

export default function RenderPizzaTopping({ toppings }) {
  // mocking selection
  const lastItem = toppings[toppings?.length - 1];

  const [state] = useOrderContext();
  const scale = getPizzaImageScaleSelector(state);
  const { image = "/assets/images/pizzaPlain.png" } =
    pizzaToppingInfo?.[lastItem] || {};

  return <PizzaRenderer scale={scale} image={image} />;
}
