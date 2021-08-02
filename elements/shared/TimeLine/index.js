import React from "react";

import {
  Wrapper,
  TimeLineContainer,
  Dot,
  TextContainerWrapper,
} from "./styles";

const TimeLine = ({ children, currentActiveStep, ...props }) => (
  <Wrapper {...props}>
    {React.Children.map(children, (child, idx) => {
      return React.cloneElement(child, {
        step: idx + 1,
        currentActiveStep,
        totalSteps: children?.length || 0,
      });
    })}
  </Wrapper>
);

const TimelineItem = ({
  children,
  currentActiveStep,
  totalSteps,
  step,
  ...rest
}) => {
  const isDone = step < currentActiveStep;
  const isActive = step === currentActiveStep;
  const isLastStep = step === totalSteps;
  return (
    <TimeLineContainer showLine={!isLastStep} isDone={isDone}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isDone,
          isLastStep,
          isActive,
          step,
          ...rest,
        })
      )}
    </TimeLineContainer>
  );
};

const TimelineDot = ({ children, isDone, isActive }) => {
  return <Dot>{children({ isDone, isActive })}</Dot>;
};

const TextContainer = ({ children, isDone, isActive }) => (
  <TextContainerWrapper>{children({ isDone, isActive })}</TextContainerWrapper>
);

TimeLine.Item = TimelineItem;
TimeLine.Dot = TimelineDot;
TimeLine.Content = TextContainer;

export default TimeLine;
