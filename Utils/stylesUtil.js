import { css } from "styled-components";

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

export { inlineStyles, hideScrollBar, Constants, fill, stroke };
