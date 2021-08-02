import PizzaRenderer from "components/shared/PizzaRenderer";
import { getPizzaImageScaleSelector } from "hooks/orderContext/selectors";
import { useOrderContext } from "hooks/orderContext";

function RenderPizzaCrust({ pizzaInfo }) {
  const [state] = useOrderContext();
  const scale = getPizzaImageScaleSelector(state);
  const { showLabel, image } = pizzaInfo;
  return (
    <PizzaRenderer showRing label={showLabel} scale={scale} image={image} />
  );
}

export default RenderPizzaCrust;
