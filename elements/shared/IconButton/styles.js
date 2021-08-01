import styled, { css } from "styled-components";

import { BaseButton } from "elements/shared/Button";
import Colors, { Gradients } from "elements/shared/Colors";

const defaultIconButtonStyle = css`
  background-color: rgba(245, 49, 63, 0.1);
  & svg {
    fill: ${Colors.orange};
  }
`;

const activeIconButtonStyle = css`
  &:active {
    background-color: ${Gradients.red};
    box-shadow: 0px 6px 25px rgba(245, 49, 63, 0.4);
    & svg {
      fill: white;
    }
  }
`;

const IconButtonBase = styled(BaseButton)`
  border-radius: 50%;
  width: 40px;
  height: 40px;

  background: none;

  ${defaultIconButtonStyle};
  ${activeIconButtonStyle}
`;

export { IconButtonBase };
