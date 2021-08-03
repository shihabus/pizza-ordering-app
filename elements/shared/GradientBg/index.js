import styled from "styled-components";
import PropTypes from "prop-types";

import { inlineStyles } from "Utils/stylesUtil";

import { Gradients } from "elements/shared/Colors";

const GradientBg = styled.div`
  background: ${Gradients.red};
  height: ${({ height }) => height};
  ${inlineStyles}
`;

GradientBg.propTypes = {
  height: PropTypes.string,
};

GradientBg.defaultProps = {
  height: "280px",
};

export default GradientBg;
