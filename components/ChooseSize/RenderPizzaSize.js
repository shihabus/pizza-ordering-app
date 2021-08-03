import PropTypes from "prop-types";

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
      image="/assets/images/chooseSize/pizzaPlaceholder.png"
      animationConfig={animationConfig}
    />
  );
}

RenderPizzaSize.propTypes = {
  pizzaInfo: PropTypes.object.isRequired,
};

export default RenderPizzaSize;
