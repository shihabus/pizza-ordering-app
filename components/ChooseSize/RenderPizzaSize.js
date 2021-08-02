import PizzaRenderer from "components/shared/PizzaRenderer";

function RenderPizzaSize({ pizzaInfo }) {
  const { showLabel, scale } = pizzaInfo;
  return (
    <PizzaRenderer
      showRing
      label={showLabel}
      scale={scale}
      image="/assets/images/pizzaSizePlaceholder.png"
    />
  );
}

export default RenderPizzaSize;
