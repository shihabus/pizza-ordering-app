import CustomizationInfo from "components/shared/CustomizationInfo";
import pizzaToppingInfo from "data/pizzaToppingsInfo.json";
import RenderPizzaTopping from "./RenderPizzaTopping";

import { useOrderContext } from "hooks/orderContext";
import {
  getOrderTotalSelector,
  getPizzaCrustSelector,
  getPizzaSizeSelector,
} from "hooks/orderContext/selectors";
import ToppingCard from "./ToppingCard";

import { SliderTitle, SubTitle, StyledSlider } from "./styles";

const CustomizationTitle = ({ toppings }) => {
  const [state] = useOrderContext();
  const total = getOrderTotalSelector(state);
  const { label: sizeLabel = "size" } = getPizzaSizeSelector(state);
  const { label: crustLabel = "crust" } = getPizzaCrustSelector(state);

  const exceededFreeLimit = toppings.length > 3;

  const totalPrice = exceededFreeLimit
    ? toppings.reduce((acc, item) => {
        return acc + pizzaToppingInfo[item]?.price;
      }, 0)
    : 0;

  const breadCrumb = [sizeLabel, crustLabel, "topping"];
  return (
    <CustomizationInfo breadCrumb={breadCrumb} total={total + totalPrice} />
  );
};

const SliderHeader = () => (
  <>
    <SliderTitle>
      Choose up to <strong>7 toppings</strong>
    </SliderTitle>
    <SubTitle>Free 3 add-ons</SubTitle>
  </>
);

export default function ChooseTopping({ toppings, setToppings }) {
  const canSelectMoreItems = toppings.length < 7;

  function onChangeHandler(value) {
    const updatedToppings = new Set([...toppings]);
    if (updatedToppings.has(value)) {
      updatedToppings.delete(value);
    } else if (canSelectMoreItems) {
      updatedToppings.add(value);
    }
    setToppings(Array.from(updatedToppings));
  }

  return (
    <>
      <CustomizationTitle toppings={toppings} />
      <RenderPizzaTopping toppings={toppings} />
      <StyledSlider
        changeHandler={onChangeHandler}
        header={<SliderHeader />}
        selection={toppings}
      >
        {pizzaToppingInfo.toppings.map((toppingType, idx) => (
          <ToppingCard
            key={idx}
            topping={pizzaToppingInfo[toppingType]}
            value={toppingType}
            disabled={!canSelectMoreItems}
          />
        ))}
      </StyledSlider>
    </>
  );
}
