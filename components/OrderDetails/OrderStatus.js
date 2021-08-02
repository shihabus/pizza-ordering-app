import TimeLine from "elements/OrderDetails/TimeLine";
import CheckIcon from "elements/shared/Icons/CheckIcon";
import { PreTitle } from "elements/shared/TextStyles";
import FoodIcon from "elements/shared/Icons/FoodIcon";
import BagIcon from "elements/shared/Icons/BagIcon";
import BikeIcon from "elements/shared/Icons/BikeIcon";
import HomeIcon from "elements/shared/Icons/HomeIcon";

import { DotContainer, StepText } from "./styles";

const orderStatusData = [
  {
    id: 1,
    label: "Order Confirmed",
    time: "11:41 am",
    icon: <CheckIcon />,
  },
  {
    id: 2,
    label: "Preparing....",
    time: "12:01pm",
    icon: <FoodIcon />,
  },
  {
    id: 3,
    label: "Dispatched",
    time: "12:10 pm",
    icon: <BagIcon />,
  },
  {
    id: 4,
    label: "In Transit",
    time: "11:41 am",
    icon: <BikeIcon />,
  },
  {
    id: 5,
    label: "Delivered",
    time: "1:00 pm",
    icon: <HomeIcon />,
  },
];

function TextContainer({ isDone, time, label }) {
  return (
    <>
      {isDone && <PreTitle>{time}</PreTitle>}
      <StepText isDone={isDone}>{label}</StepText>
    </>
  );
}

function OrderStatus() {
  const currentActiveStep = 5;
  return (
    <TimeLine currentActiveStep={currentActiveStep}>
      {orderStatusData.map(({ id, label, time, icon }) => (
        <TimeLine.Item key={id}>
          <TimeLine.Dot>
            {({ isActive, isDone }) => (
              <DotContainer isDone={isDone || isActive} stroke>
                {icon}
              </DotContainer>
            )}
          </TimeLine.Dot>
          <TimeLine.Content>
            {({ isActive, isDone }) => (
              <TextContainer
                isDone={isDone || isActive}
                time={time}
                label={label}
              />
            )}
          </TimeLine.Content>
        </TimeLine.Item>
      ))}
    </TimeLine>
  );
}

export default OrderStatus;
