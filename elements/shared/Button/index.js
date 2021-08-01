import {
  BaseButton,
  FullWidthButtonWrapper,
  ButtonLabel,
  RoundedButtonWrapper,
  DefaultButtonLabel,
} from "./styles";

function FullWidth({ children, ...props }) {
  return (
    <FullWidthButtonWrapper {...props}>
      <ButtonLabel>{children}</ButtonLabel>
    </FullWidthButtonWrapper>
  );
}

function RoundedButton({ children, isActive, ...props }) {
  const Label = isActive ? ButtonLabel : DefaultButtonLabel;
  return (
    <RoundedButtonWrapper isActive={isActive} {...props}>
      <Label>{children}</Label>
    </RoundedButtonWrapper>
  );
}

export { BaseButton, FullWidth, RoundedButton };
