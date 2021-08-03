import React from "react";
import PropTypes from "prop-types";

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

TimeLine.propTypes = {
  children: PropTypes.node.isRequired,
  currentActiveStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

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

TimelineItem.propTypes = {
  children: PropTypes.node.isRequired,
  currentActiveStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  totalSteps: PropTypes.number,
  step: PropTypes.number,
};

TimelineItem.defaultProps = {
  currentActiveStep: 0,
  totalSteps: 0,
  step: 0,
};

const TimelineDot = ({ children, isDone, isActive }) => {
  return <Dot>{children({ isDone, isActive })}</Dot>;
};

TimelineDot.propTypes = {
  children: PropTypes.func,
  isDone: PropTypes.bool,
  isActive: PropTypes.bool,
};

TimelineDot.defaultProps = {
  children: () => {},
  isDone: false,
  isActive: false,
};

const TextContainer = ({ children, isDone, isActive }) => (
  <TextContainerWrapper>{children({ isDone, isActive })}</TextContainerWrapper>
);

TextContainer.propTypes = {
  children: PropTypes.func,
  isDone: PropTypes.bool,
  isActive: PropTypes.bool,
};

TextContainer.defaultProps = {
  children: () => {},
  isDone: false,
  isActive: false,
};

TimeLine.Item = TimelineItem;
TimeLine.Dot = TimelineDot;
TimeLine.Content = TextContainer;

export default TimeLine;
