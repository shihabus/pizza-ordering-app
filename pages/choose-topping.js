import { useState } from "react";
import { useRouter } from "next/router";

import pizzaToppingInfo from "data/pizzaToppingsInfo.json";

import NavBar from "components/shared/NavBar";
import PageTitle from "components/shared/PageTitle";
import GradientBg from "elements/shared/GradientBg";
import Layout from "elements/shared/Layout";
import BottomBar from "elements/shared/BottomBar";
import { FullWidth } from "elements/shared/Button";
import ChooseTopping from "components/ChooseToppings";
import { useOrderContext } from "/hooks/orderContext";
import { getPizzaToppingSelector } from "hooks/orderContext/selectors";
import { updatePizzaToppings } from "hooks/orderContext/actions";
import { routeConstants } from "constants/routeConstants";

export default function ChooseToppingPage() {
  const [state, dispatch] = useOrderContext();
  const router = useRouter();

  const toppingSelection = getPizzaToppingSelector(state);

  const [toppings, setToppings] = useState([
    ...toppingSelection?.map((topping) => topping?.value),
  ]);

  function clickHandler() {
    const selectedToppings = toppings.map(
      (topping) => pizzaToppingInfo[topping]
    );
    updatePizzaToppings(dispatch, selectedToppings);
    router.push(routeConstants.confirmOrder);
  }

  return (
    <>
      <PageTitle />
      <Layout.FullPage>
        <NavBar showBack showHome />
        <Layout.Content showBottomBar>
          <GradientBg />
          <ChooseTopping toppings={toppings} setToppings={setToppings} />
        </Layout.Content>
        <BottomBar>
          <FullWidth onClick={clickHandler}>Next</FullWidth>
        </BottomBar>
      </Layout.FullPage>
    </>
  );
}
