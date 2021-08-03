import { useMemo } from "react";
import PropTypes from "prop-types";

import {
  getOrderTotalSelector,
  getPizzaCrustSelector,
  getPizzaSizeSelector,
} from "hooks/orderContext/selectors";
import { useOrderContext } from "hooks/orderContext";
import pizzaCrustInfo from "data/pizzaCrustInfo.json";

import ButtonGroup from "elements/shared/ButtonGroup";
import CustomizationInfo from "components/shared/CustomizationInfo";

import RenderPizzaCrust from "./RenderPizzaCrust";
import { PositionedContainer, Title } from "./styles";

const ButtonGroupTitle = () => (
  <Title>
    Choose your <b>crust</b>
  </Title>
);

function CustomizationTitle({ pizzaInfo }) {
  const [state] = useOrderContext();
  const total = getOrderTotalSelector(state);
  const { label = "size" } = getPizzaSizeSelector(state);
  const { price: deductCrustPrice = 0 } = getPizzaCrustSelector(state);
  const { price = 0 } = pizzaInfo;

  const breadCrumb = [
    { label, isDone: true },
    { label: "crust", isDone: false },
    { label: "crust", isDone: false },
  ];
  return (
    <CustomizationInfo
      total={total + price - deductCrustPrice}
      breadCrumb={breadCrumb}
    />
  );
}

CustomizationTitle.propTypes = {
  pizzaInfo: PropTypes.object.isRequired,
};

function ChooseCrust({ crust, setCrust }) {
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

ChooseCrust.propTypes = {
  crust: PropTypes.string.isRequired,
  setCrust: PropTypes.func.isRequired,
};

export default ChooseCrust;
