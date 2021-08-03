import styled, { css } from "styled-components";

import { inlineStyles } from "Utils/stylesUtil";

import { PreTitle } from "elements/shared/TextStyles";
import Colors from "elements/shared/Colors";
import ImageWithLoader from "elements/shared/ImageWithLoader";

const transitionStyle = css`
  will-change: opacity;
  &.fade-appear {
    opacity: 0;
  }
  &.fade-appear-active {
    opacity: 1;
    transition: opacity 50ms ease-in;
  }
  &.fade-appear-done {
    opacity: 1;
  }

  &.fade-enter {
    opacity: 0;
    z-index: 1;
  }
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 50ms linear;
  }

  /* exit */
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 150ms linear;
  }
  &.fade-exit-done {
    opacity: 0;
  }
`;

const imageTransitionStyle = css`
  will-change: opacity;
  &.image-fade-appear {
    opacity: 0;
  }
  &.image-fade-appear-active {
    opacity: 1;
    transition: opacity 50ms linear;
  }
  &.image-fade-appear-done {
    opacity: 1;
  }

  &.image-fade-enter {
    opacity: 0;
    z-index: 1;
  }
  &.image-fade-enter.image-fade-enter-active {
    opacity: 1;
    transition: opacity 50ms linear;
  }

  /* exit */
  &.image-fade-exit {
    opacity: 1;
  }
  &.image-fade-exit.image-fade-exit-active {
    opacity: 0;
    transition: opacity 100ms linear;
  }
  &.image-fade-exit-done {
    opacity: 0;
  }
`;

const BlurredBorder = styled.div`
  --ring-width: 375px;
  --blurred-border-width: 304px;
  --scale-ratio: ${(props) => props.scale || 1};
  --plate-width: 250px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  width: var(--blurred-border-width);
  height: var(--blurred-border-width);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  margin: 0 auto;
  text-align: center;
  left: 0;
  right: 0;
  /* change scale with pizza size s=1,m=1.05,l=1.1 */
  transform: translateY(-50%) scale(var(--scale-ratio));

  ${transitionStyle};
  ${imageTransitionStyle};
`;

const Plate = styled.div`
  box-shadow: 0px 4px 15px rgba(218, 218, 229, 0.2);
  border-radius: 50%;
  width: var(--plate-width);
  height: var(--plate-width);
  background-color: ${Colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PizzaImage = styled(ImageWithLoader)`
  border-radius: 50%;
  ${inlineStyles};
`;

const Ring = styled.div`
  position: absolute;
  width: var(--ring-width);
  height: calc(var(--ring-width) / 2);
  background-color: transparent;
  border-bottom-left-radius: 200.5px; /* height + border-width */
  border-bottom-right-radius: 200.5px;
  border: 0.5px solid ${Colors.stroke};
  border-top: 0;
  transform: translateY(50%);
`;

const PizzaLabel = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  text-align: center;
  left: 0;
  right: 0;
  transform: translateY(50%);

  background-color: ${Colors.stroke};
  backdrop-filter: blur(4px);
  border-radius: 10px;
  width: fit-content;
  padding: 6px 12px;
`;

const LabelText = styled(PreTitle)`
  color: ${Colors.lightPurple};
`;

export { BlurredBorder, Plate, PizzaImage, Ring, PizzaLabel, LabelText };
