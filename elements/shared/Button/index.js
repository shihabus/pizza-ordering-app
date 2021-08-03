import PropTypes from "prop-types";

import { ButtonText } from "elements/shared/TextStyles";

import {
  BaseButton,
  FullWidthButtonWrapper,
  ButtonLabel,
  RoundedButtonWrapper,
} from "./styles";

function FullWidth({ children, ...props }) {
  return (
    <FullWidthButtonWrapper {...props}>
      <ButtonLabel>{children}</ButtonLabel>
    </FullWidthButtonWrapper>
  );
}

FullWidth.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

FullWidth.defaultProps = {
  onClick: () => {},
};

function RoundedButton({ children, isActive, ...props }) {
  const Label = isActive ? ButtonLabel : ButtonText.Default;
  return (
    <RoundedButtonWrapper isActive={isActive} {...props}>
      <Label>{children}</Label>
    </RoundedButtonWrapper>
  );
}

export { BaseButton, FullWidth, RoundedButton };

RoundedButton.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

RoundedButton.defaultProps = {
  isActive: false,
  onClick: () => {},
};
