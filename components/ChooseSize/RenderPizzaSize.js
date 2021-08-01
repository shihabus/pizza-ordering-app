import React from "react";
import PizzaRenderer from "components/shared/PizzaRenderer";

export default function RenderPizzaSize({ pizzaInfo }) {
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
