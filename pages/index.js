import { useState } from "react";
import { useRouter } from "next/router";

import { useOrderContext } from "hooks/orderContext";
import { getPizzaSizeSelector } from "hooks/orderContext/selectors";
import { updatePizzaSize } from "hooks/orderContext/actions";
import pizzaSizeInfo from "data/pizzaSizeInfo.json";
import { routeConstants } from "constants/routeConstants";

import PageTitle from "components/shared/PageTitle";
import NavBar from "components/shared/NavBar";
import ChooseSize from "components/ChooseSize";

import Layout from "elements/shared/Layout";
import BottomBar from "elements/shared/BottomBar";
import { FullWidth } from "elements/shared/Button";
import GradientBg from "elements/shared/GradientBg";

export default function ChooseSizePage() {
  const [state, dispatch] = useOrderContext();
  const currentSize = getPizzaSizeSelector(state);
  const [size, setSize] = useState(currentSize?.label || "medium");

  const router = useRouter();

  function clickHandler() {
    updatePizzaSize(dispatch, pizzaSizeInfo[size]);
    router.push(routeConstants.chooseCrust);
  }

  return (
    <>
      <PageTitle />
      <Layout.FullPage>
        <NavBar showHome />
        <Layout.Content showBottomBar>
          <GradientBg />
          <ChooseSize size={size} setSize={setSize} />
        </Layout.Content>
        <BottomBar>
          <FullWidth onClick={clickHandler}>Next</FullWidth>
        </BottomBar>
      </Layout.FullPage>
    </>
  );
}
