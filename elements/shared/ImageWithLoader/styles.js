import styled from "styled-components";

import { inlineStyles, shimmer } from "Utils/stylesUtil";

const StyledImage = styled.img`
  ${inlineStyles}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShimmerPlaceholder = styled.div`
  position: absolute;
  ${shimmer};
  ${inlineStyles};
`;

export { StyledImage, Container, ShimmerPlaceholder };
