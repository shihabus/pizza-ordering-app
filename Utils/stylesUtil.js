import { css } from "styled-components";

export const inlineStyles = (props) =>
  props.styles &&
  css`
    ${props.styles}
  `;

export const hideScrollBar = css`
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Constants = {
  APP_BAR_HEIGHT: "48px",
  BOTTOM_BAR_HEIGHT: "60px",
};

export const fill = (props) =>
  props.fill &&
  css`
    fill: ${props.fill};
  `;

export const stroke = (props) =>
  props.stroke &&
  css`
    stroke: ${props.stroke};
  `;
