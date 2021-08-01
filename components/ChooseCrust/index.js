import { useMemo } from "react";

import ButtonGroup from "elements/shared/ButtonGroup";
import CustomizationInfo from "components/shared/CustomizationInfo";

import pizzaCrustInfo from "data/pizzaCrustInfo.json";

import RenderPizzaCrust from "./RenderPizzaCrust";
import { PositionedContainer, Title } from "./styles";
import {
  getOrderTotalSelector,
  getPizzaSizeSelector,
} from "hooks/orderContext/selectors";
import { useOrderContext } from "hooks/orderContext";

const ButtonGroupTitle = () => (
  <Title>
    Choose your <b>crust</b>
  </Title>
);

const CustomizationTitle = ({ pizzaInfo }) => {
  const [state] = useOrderContext();
  const total = getOrderTotalSelector(state);
  const { label = "size" } = getPizzaSizeSelector(state);
  const { price } = pizzaInfo;

  const breadCrumb = [label, "crust", "topping"];
  return <CustomizationInfo total={total + price} breadCrumb={breadCrumb} />;
};

export default function ChooseCrust({ crust, setCrust }) {
  function onChangeHandler(selectedCrust) {
    setCrust(selectedCrust);
  }

  const selection = useMemo(() => pizzaCrustInfo[crust] || {}, [crust]);

  return (
    <>
      <CustomizationTitle pizzaInfo={selection} />
      <RenderPizzaCrust pizzaInfo={selection} />
      <PositionedContainer>
        <ButtonGroup
          title={<ButtonGroupTitle />}
          onChange={onChangeHandler}
          selection={crust}
        >
          {pizzaCrustInfo.crusts.map((crust, idx) => (
            <ButtonGroup.Item key={idx} value={crust}>
              {crust}
            </ButtonGroup.Item>
          ))}
        </ButtonGroup>
      </PositionedContainer>
    </>
  );
}
