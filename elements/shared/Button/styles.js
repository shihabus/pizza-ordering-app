import styled, { css } from "styled-components";

import { inlineStyles } from "Utils/stylesUtil";

import { ButtonText } from "elements/shared/TextStyles";
import Colors, { Gradients } from "elements/shared/Colors";

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  ${inlineStyles};
`;

const FullWidthButtonWrapper = styled(BaseButton)`
  width: 100%;
  background: ${Gradients.red};
  height: 100%;
`;

const ButtonLabel = styled(ButtonText.Selected)`
  color: ${Colors.white};
`;

// Rounded Button
const activeStyle = css`
  background: ${Gradients.red};
  box-shadow: 0px 6px 25px rgba(245, 49, 63, 0.4);
`;

const RoundedButtonWrapper = styled(BaseButton)`
  padding: 10px 20px;
  border-radius: 20px;

  background: none;

  ${({ isActive }) => isActive && activeStyle}
`;

const DefaultButtonLabel = styled(ButtonText.Default)``;

export {
  BaseButton,
  FullWidthButtonWrapper,
  ButtonLabel,
  RoundedButtonWrapper,
  DefaultButtonLabel,
};
