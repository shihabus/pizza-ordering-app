import PropTypes from "prop-types";

import { getPizzaImageScaleSelector } from "hooks/orderContext/selectors";
import { useOrderContext } from "hooks/orderContext";

import PizzaRenderer from "components/shared/PizzaRenderer";

function RenderPizzaCrust({ pizzaInfo }) {
  const [state] = useOrderContext();
  const scale = getPizzaImageScaleSelector(state);
  const { showLabel, image } = pizzaInfo;

  const animationConfig = {
    key: showLabel,
    unmountOnExit: true,
    timeout: 200,
    classNames: "image-fade",
  };

  return (
    <PizzaRenderer
      showRing
      label={showLabel}
      scale={scale}
      image={image}
      animationConfig={animationConfig}
    />
  );
}

RenderPizzaCrust.propTypes = {
  pizzaInfo: PropTypes.object.isRequired,
};

export default RenderPizzaCrust;
