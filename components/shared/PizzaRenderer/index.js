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

function Pizza(props) {
  const { image, showRing, label, scale, animationConfig } = props;

  return (
    <TransitionGroup appear={true}>
      <CSSTransition {...animationConfig}>
        <BlurredBorder scale={scale}>
          <Plate>
            <PizzaImage
              src={image}
              width="216"
              height="216"
              alt="pizza image"
            />
          </Plate>
          {showRing && (
            <Ring>
              <PizzaLabel>
                <LabelText>{label}</LabelText>
              </PizzaLabel>
            </Ring>
          )}
        </BlurredBorder>
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
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

Pizza.defaultProps = {
  showRing: false,
  label: "",
  scale: 1,
};
