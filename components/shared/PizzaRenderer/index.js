import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
  BlurredBorder,
  Plate,
  PizzaImage,
  Ring,
  PizzaLabel,
  LabelText,
} from "./styles";

function RenderPizza({ scale, image, showRing, label }) {
  return (
    <BlurredBorder scale={scale}>
      <Plate>
        <PizzaImage src={image} width="216" height="216" alt="pizza image" />
      </Plate>
      {showRing && (
        <Ring>
          <PizzaLabel>
            <LabelText>{label}</LabelText>
          </PizzaLabel>
        </Ring>
      )}
    </BlurredBorder>
  );
}

function Pizza(props) {
  const { animationConfig, ...rest } = props;

  if (!animationConfig) {
    return <RenderPizza {...rest} />;
  }

  return (
    <TransitionGroup appear={true}>
      <CSSTransition {...animationConfig}>
        <RenderPizza {...rest} />
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Pizza;

Pizza.propTypes = {
  image: PropTypes.string.isRequired,
  showRing: PropTypes.bool,
  label: PropTypes.string,
  scale: PropTypes.number,
};

Pizza.defaultProps = {
  showRing: false,
  label: "",
  scale: 1,
};
