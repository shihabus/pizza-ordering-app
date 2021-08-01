import styled from "styled-components";
import { hideScrollBar, inlineStyles } from "Utils/stylesUtil";

const Container = styled.div`
  position: relative;
  ${inlineStyles}
`;

const SliderWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;

  scroll-behavior: smooth;
  padding: 26px 40px;
  scroll-snap-type: x mandatory;

  ${hideScrollBar};
`;

const Slides = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;

  & > div {
    margin: 0px 12px;
    scroll-snap-align: center;
  }
`;

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 15px rgba(218, 218, 229, 0.2);

  border-radius: 20px;
  height: 180px;
  width: 336px;

  position: relative;
  display: flex;
  justify-content: center;

  margin: 0 auto;
  padding: 20px 0px;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

export { Container, SliderWrapper, Slides, CardContainer, TitleContainer };
