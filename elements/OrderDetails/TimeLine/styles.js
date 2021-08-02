import styled, { css } from "styled-components";

import Colors from "elements/shared/Colors";
import { inlineStyles } from "utils/stylesUtil";

const Wrapper = styled.ul`
  padding: 40px;
  list-style: none;
  ${inlineStyles}
`;

const TimeLineContainer = styled.li`
  position: relative;

  ${({ showLine }) =>
    showLine &&
    css`
      &::before {
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        width: 0.46px;
        background-color: ${Colors.stroke};
        ${({ isDone }) =>
          isDone &&
          css`
            width: 1px;
            background-color: ${Colors.red};
          `}
      }
      min-height: 80px;
    `}
`;

const Dot = styled.div`
  position: absolute;
  transform: translate(-50%, -8px);
`;

const TextContainerWrapper = styled.div`
  max-height: 30px;
  padding-left: 46px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export { Wrapper, TimeLineContainer, Dot, TextContainerWrapper };
