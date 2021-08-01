import React from "react";
import PropTypes from "prop-types";

import {
  BlurredBorder,
  Plate,
  PizzaImage,
  Ring,
  PizzaLabel,
  LabelText,
} from "./styles";

function Pizza({ image, showRing, label, scale }) {
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

Pizza.propTypes = {
  image: PropTypes.string.isRequired,
  showRing: PropTypes.bool,
  label: PropTypes.string,
  scale: PropTypes.number,
};

Pizza.propTypes = {
  showRing: false,
  label: "",
  scale: 1,
};

export default Pizza;
