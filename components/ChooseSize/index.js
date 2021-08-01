import { useMemo } from "react";
import ButtonGroup from "elements/shared/ButtonGroup";

import pizzaSizeInfo from "data/pizzaSizeInfo.json";
import CustomizationInfo from "components/shared/CustomizationInfo";

import RenderPizzaSize from "./RenderPizzaSize";
import { PositionedContainer, Title } from "./styles";

const ButtonGroupTitle = () => (
  <Title>
    Choose your <b>size</b>
  </Title>
);

const CustomizationTitle = ({ pizzaInfo }) => {
  const total = 0;
  const { price } = pizzaInfo;

  const breadCrumb = ["size", "crust", "topping"];
  return <CustomizationInfo total={total + price} breadCrumb={breadCrumb} />;
};

export default function Index({ size, setSize }) {
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
