import React from "react";

import TimeLine from "/elements/shared/TimeLine";
import CheckIcon from "elements/shared/Icons/CheckIcon";
import { PreTitle } from "/elements/shared/TextStyles";
import FoodIcon from "elements/shared/Icons/FoodIcon";
import BagIcon from "elements/shared/Icons/BagIcon";
import BikeIcon from "elements/shared/Icons/BikeIcon";
import HomeIcon from "elements/shared/Icons/HomeIcon";

import { DotContainer, StepText } from "./styles";

const Icon = ({ children, ...rest }) => (
  <DotContainer {...rest}>{children}</DotContainer>
);

const TextContainer = ({ isDone, time, label }) => (
  <>
    {isDone && <PreTitle>{time}</PreTitle>}
    <StepText isDone={isDone}>{label}</StepText>
  </>
);

const OrderStatus = () => {
  const currentActiveStep = 2;
  return (
    <TimeLine currentActiveStep={currentActiveStep}>
      <TimeLine.Item>
        <TimeLine.Dot>
          {({ isActive, isDone }) => (
            <Icon isDone={isDone || isActive} stroke>
              <CheckIcon />
            </Icon>
          )}
        </TimeLine.Dot>
        <TimeLine.Content>
          {({ isActive, isDone }) => (
            <TextContainer
              isDone={isDone || isActive}
              time="11:41 am"
              label="Order Confirmed"
            />
          )}
        </TimeLine.Content>
      </TimeLine.Item>
      <TimeLine.Item>
        <TimeLine.Dot>
          {({ isActive, isDone }) => (
            <Icon isDone={isDone || isActive}>
              <FoodIcon />
            </Icon>
          )}
        </TimeLine.Dot>
        <TimeLine.Content>
          {({ isActive, isDone }) => (
            <TextContainer
              isDone={isDone || isActive}
              time="12:01pm"
              label="Preparing...."
            />
          )}
        </TimeLine.Content>
      </TimeLine.Item>
      <TimeLine.Item>
        <TimeLine.Dot>
          {({ isActive, isDone }) => (
            <Icon isDone={isDone || isActive}>
              <BagIcon />
            </Icon>
          )}
        </TimeLine.Dot>
        <TimeLine.Content>
          {({ isActive, isDone }) => (
            <TextContainer
              isDone={isDone || isActive}
              time="12:10 pm"
              label="Dispatched"
            />
          )}
        </TimeLine.Content>
      </TimeLine.Item>
      <TimeLine.Item>
        <TimeLine.Dot>
          {({ isActive, isDone }) => (
            <Icon isDone={isDone || isActive}>
              <BikeIcon />
            </Icon>
          )}
        </TimeLine.Dot>
        <TimeLine.Content>
          {({ isActive, isDone }) => (
            <TextContainer
              isDone={isDone || isActive}
              time="12:40 pm"
              label="In Transit"
            />
          )}
        </TimeLine.Content>
      </TimeLine.Item>
      <TimeLine.Item>
        <TimeLine.Dot>
          {({ isActive, isDone }) => (
            <Icon isDone={isDone || isActive}>
              <HomeIcon />
            </Icon>
          )}
        </TimeLine.Dot>
        <TimeLine.Content>
          {({ isActive, isDone }) => (
            <TextContainer
              isDone={isDone || isActive}
              time="1:00 pm"
              label="Delivered"
            />
          )}
        </TimeLine.Content>
      </TimeLine.Item>
    </TimeLine>
  );
};

export default OrderStatus;
