import styled, { css } from "styled-components";

import Colors, { Gradients } from "elements/shared/Colors";

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const Input = styled.input`
  display: none;
`;

const iconsStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const checkedIconStyle = css`
  ${Input}:disabled:checked ~ & {
    cursor: not-allowed;
  }
  ${Input}:not(:checked) ~ & {
    display: none;
  }
`;

const uncheckedIconStyle = css`
  & > svg {
    fill: ${Colors.lightGray} !important;
    stroke: ${Colors.lightGray} !important;
  }
  ${Input}:disabled ~ & {
    cursor: not-allowed;
  }

  ${Input}:checked ~ & {
    display: none;
  }
`;

const CheckedStyle = styled.div`
  ${iconsStyle}
  ${checkedIconStyle};
  border-width: 1px;
  background: ${Gradients.red};
  box-shadow: 0px 6px 25px rgba(245, 49, 63, 0.4);
`;

const UnCheckedStyle = styled.div`
  ${iconsStyle}
  ${uncheckedIconStyle};

  background-color: ${Colors.lightGray};
  border: 1px solid ${Colors.stroke};
  box-shadow: inset 0px 2px 8px rgba(160, 168, 204, 0.4);
`;

export { Label, Input, CheckedStyle, UnCheckedStyle };
