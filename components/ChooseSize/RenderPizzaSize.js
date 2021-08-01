import React from "react";
import PizzaRenderer from "components/shared/PizzaRenderer";

export default function RenderPizzaSize({ pizzaInfo }) {
  const { size, scale } = pizzaInfo;
  return (
    <PizzaRenderer
      showRing
      label={size}
      scale={scale}
      image="/assets/images/pizzaSizePlaceholder.png"
    />
  );
}
