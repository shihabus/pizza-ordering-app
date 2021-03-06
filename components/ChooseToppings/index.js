import PropTypes from "prop-types";

import { MAX_TOPPINGS_COUNT } from "constants/appConstants";
import pizzaToppingInfo from "data/pizzaToppingsInfo.json";
import { useOrderContext } from "hooks/orderContext";
import {
  getOrderTotalSelector,
  getPizzaCrustSelector,
  getPizzaSizeSelector,
  getPizzaToppingSelector,
} from "hooks/orderContext/selectors";

import CustomizationInfo from "components/shared/CustomizationInfo";

import RenderPizzaTopping from "./RenderPizzaTopping";
import ToppingCard from "./ToppingCard";
import { SliderTitle, SubTitle, StyledSlider } from "./styles";

function CustomizationTitle({ toppings }) {
  const [state] = useOrderContext();
  const total = getOrderTotalSelector(state);
  const addedToppings = getPizzaToppingSelector(state);
  const { label: sizeLabel = "size" } = getPizzaSizeSelector(state);
  const { label: crustLabel = "crust" } = getPizzaCrustSelector(state);

  const alreadyInCart = addedToppings.reduce((acc, item) => {
    return acc + item?.price;
  }, 0);

  const totalPrice = toppings.reduce((acc, item) => {
    return acc + pizzaToppingInfo[item]?.price;
  }, 0);

  let toppingBreadCrumb = [{ label: "toppings", isDone: false }];

  if (toppings?.length) {
    toppingBreadCrumb = [
      ...toppings.map((topping) => ({
        label: pizzaToppingInfo[topping].label,
        isDone: true,
      })),
    ];
  }

  const breadCrumb = [
    { label: sizeLabel, isDone: true },
    { label: crustLabel + " crust", isDone: true },
    ...toppingBreadCrumb,
  ];

  return (
    <CustomizationInfo
      breadCrumb={breadCrumb}
      total={total - alreadyInCart + totalPrice}
    />
  );
}

const SliderHeader = () => (
  <>
    <SliderTitle>
      Choose up to <strong>7 toppings</strong>
    </SliderTitle>
    <SubTitle>Free 3 add-ons</SubTitle>
  </>
);

function ChooseTopping({ toppings, setToppings }) {
  const canSelectMoreItems = toppings.length < MAX_TOPPINGS_COUNT;

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

ChooseTopping.propTypes = {
  toppings: PropTypes.array.isRequired,
  setToppings: PropTypes.func.isRequired,
};

export default ChooseTopping;
