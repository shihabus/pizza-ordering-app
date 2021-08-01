import styled from "styled-components";

import { inlineStyles } from "Utils/stylesUtil";

import { Gradients } from "elements/shared/Colors";

const GradientBg = styled.div`
  background: ${Gradients.red};
  height: ${({ height }) => height};
  ${inlineStyles}
`;

export { GradientBg };
