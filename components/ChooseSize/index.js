import { useMemo } from "react";

import pizzaSizeInfo from "data/pizzaSizeInfo.json";

import ButtonGroup from "elements/shared/ButtonGroup";
import CustomizationInfo from "components/shared/CustomizationInfo";

import RenderPizzaSize from "./RenderPizzaSize";
import { PositionedContainer, Title } from "./styles";

const ButtonGroupTitle = () => (
  <Title>
    Choose your <b>size</b>
  </Title>
);

function CustomizationTitle({ pizzaInfo }) {
  const total = 0;
  const { price } = pizzaInfo;

  const breadCrumb = ["size", "crust", "topping"];
  return <CustomizationInfo total={total + price} breadCrumb={breadCrumb} />;
}

function ChooseSize({ size, setSize }) {
  function onChangeHandler(option) {
    setSize(option);
  }

  const selection = useMemo(() => pizzaSizeInfo[size] || {}, [size]);

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

export default ChooseSize;
