import TimeLine from "elements/OrderDetails/TimeLine";
import CheckIcon from "elements/shared/Icons/CheckIcon";
import { PreTitle } from "elements/shared/TextStyles";
import FoodIcon from "elements/shared/Icons/FoodIcon";
import BagIcon from "elements/shared/Icons/BagIcon";
import BikeIcon from "elements/shared/Icons/BikeIcon";
import HomeIcon from "elements/shared/Icons/HomeIcon";
import Colors from "elements/shared/Colors";

import { DotContainer, StepText } from "./styles";

const orderStatusData = [
  {
    id: 1,
    label: "Order Confirmed",
    time: "11:41 am",
    inActiveIcon: <CheckIcon />,
    activeIcon: <CheckIcon stroke={Colors.red} />,
  },
  {
    id: 2,
    label: "Preparing....",
    time: "12:01pm",
    inActiveIcon: <FoodIcon />,
    activeIcon: <FoodIcon fill={Colors.red} />,
  },
  {
    id: 3,
    label: "Dispatched",
    time: "12:10 pm",
    inActiveIcon: <BagIcon />,
    activeIcon: <BagIcon fill={Colors.red} />,
  },
  {
    id: 4,
    label: "In Transit",
    time: "11:41 am",
    inActiveIcon: <BikeIcon />,
    activeIcon: <BikeIcon fill={Colors.red} />,
  },
  {
    id: 5,
    label: "Delivered",
    time: "1:00 pm",
    inActiveIcon: <HomeIcon />,
    activeIcon: <HomeIcon fill={Colors.red} />,
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
  const currentActiveStep = 2;
  return (
    <TimeLine currentActiveStep={currentActiveStep}>
      {orderStatusData.map(({ id, label, time, inActiveIcon, activeIcon }) => (
        <TimeLine.Item key={id}>
          <TimeLine.Dot>
            {({ isActive, isDone }) => {
              const completed = isDone || isActive;
              return (
                <DotContainer isDone={completed}>
                  {completed ? activeIcon : inActiveIcon}
                </DotContainer>
              );
            }}
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
