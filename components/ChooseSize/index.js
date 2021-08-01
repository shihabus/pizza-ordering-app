import { useState, useMemo } from "react";
import ButtonGroup from "elements/shared/ButtonGroup";

import pizzaSizeInfo from "./data/pizzaSizeInfo.json";
import RenderPizzaSize from "./RenderPizzaSize";

import { PositionedContainer, Title } from "./styles";
import CustomizationInfo from "components/shared/CustomizationInfo";

const ButtonGroupTitle = () => (
  <Title>
    Choose your <b>size</b>
  </Title>
);

const CustomizationTitle = ({ pizzaInfo }) => {
  const { price } = pizzaInfo;
  const total = 0;

  const breadCrumb = ["size", "crust", "topping"];
  return <CustomizationInfo total={total + price} breadCrumb={breadCrumb} />;
};

export default function Index() {
  const [size, setSize] = useState("medium");

  function onChangeHandler(option) {
    setSize(option);
  }

  const selection = useMemo(() => pizzaSizeInfo[size], [size]);

  return (
    <>
      <CustomizationTitle pizzaInfo={selection} />
      <RenderPizzaSize pizzaInfo={selection} />
      <PositionedContainer>
        <ButtonGroup
          title={<ButtonGroupTitle />}
          onChange={onChangeHandler}
          selection={size}
        >
          {pizzaSizeInfo.sizes.map((pizzaSize, idx) => (
            <ButtonGroup.Item key={idx} value={pizzaSize}>
              {pizzaSize}
            </ButtonGroup.Item>
          ))}
        </ButtonGroup>
      </PositionedContainer>
    </>
  );
}
