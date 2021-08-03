import PizzaRenderer from "components/shared/PizzaRenderer";

function RenderPizzaSize({ pizzaInfo }) {
  const { showLabel, scale } = pizzaInfo;
  const animationConfig = {
    key: scale,
    unmountOnExit: true,
    timeout: 400,
    classNames: "fade",
  };
  return (
    <PizzaRenderer
      showRing
      label={showLabel}
      scale={scale}
      image="/assets/images/pizzaSizePlaceholder.png"
      animationConfig={animationConfig}
    />
  );
}

export default RenderPizzaSize;
