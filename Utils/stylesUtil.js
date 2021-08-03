import { css, keyframes } from "styled-components";

const inlineStyles = (props) =>
  props.styles &&
  css`
    ${props.styles}
  `;

const hideScrollBar = css`
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Constants = {
  APP_BAR_HEIGHT: "48px",
  BOTTOM_BAR_HEIGHT: "60px",
};

const fill = (props) =>
  props.fill &&
  css`
    fill: ${props.fill};
  `;

const stroke = (props) =>
  props.stroke &&
  css`
    stroke: ${props.stroke};
  `;

const placeHolderShimmer = keyframes`
    0%{
        background-position: -468px 0;
    }
    100%{
        background-position: 468px 0;
	}
`;

const shimmer = css`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: linear-gradient(to right, #f6f7f8 8%, #e6e6e6 18%, #f6f7f8 33%);
  background-size: 800px 104px;
  height: ${(props) => props.height || "104px"};
`;

export {
  inlineStyles,
  hideScrollBar,
  Constants,
  fill,
  stroke,
  placeHolderShimmer,
  shimmer,
};
