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

function RoundedButton({ children, isActive, ...props }) {
  const Label = isActive ? ButtonLabel : ButtonText.Default;
  return (
    <RoundedButtonWrapper isActive={isActive} {...props}>
      <Label>{children}</Label>
    </RoundedButtonWrapper>
  );
}

export { BaseButton, FullWidth, RoundedButton };
