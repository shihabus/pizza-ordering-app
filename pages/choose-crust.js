import { useState } from "react";
import { useRouter } from "next/router";

import pizzaCrustInfo from "data/pizzaCrustInfo.json";
import PageTitle from "components/shared/PageTitle";
import NavBar from "components/shared/NavBar";
import Layout from "elements/shared/Layout";
import BottomBar from "elements/shared/BottomBar";
import { FullWidth } from "elements/shared/Button";
import GradientBg from "elements/shared/GradientBg";
import ChooseCrust from "components/ChooseCrust";
import { updatePizzaCrust } from "hooks/orderContext/actions";
import { useOrderContext } from "hooks/orderContext";
import { getPizzaCrustSelector } from "hooks/orderContext/selectors";
import { routeConstants } from "constants/routeConstants";

export default function ChooseCrustPage() {
  const router = useRouter();

  const [state, dispatch] = useOrderContext();
  const currentCrust = getPizzaCrustSelector(state);
  const [crust, setCrust] = useState(currentCrust?.label || "thin");

  function clickHandler() {
    updatePizzaCrust(dispatch, pizzaCrustInfo[crust]);
    router.push(routeConstants.chooseTopping);
  }
  return (
    <>
      <PageTitle />
      <Layout.FullPage>
        <NavBar showBack showHome />
        <Layout.Content showBottomBar>
          <GradientBg />
          <ChooseCrust crust={crust} setCrust={setCrust} />
        </Layout.Content>
        <BottomBar>
          <FullWidth onClick={clickHandler}>Next</FullWidth>
        </BottomBar>
      </Layout.FullPage>
    </>
  );
}
