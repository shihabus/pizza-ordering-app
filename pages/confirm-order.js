import GradientBg from "elements/shared/GradientBg";
import React from "react";
import NavBar from "/components/shared/NavBar";
import PageTitle from "/components/shared/PageTitle";
import { FullWidth } from "/elements/shared/Button";
import Layout from "/elements/shared/Layout";
import BottomBar from "elements/shared/BottomBar";
import ConfirmOrder from "components/ConfirmOrder";
import { useOrderContext } from "/hooks/orderContext";
import {
  getOrderSummarySelector,
  getOrderTotalSelector,
} from "hooks/orderContext/selectors";
import { useRouter } from "next/router";
import { routeConstants } from "constants/routeConstants";

export default function ConfirmOrderPage() {
  const [state] = useOrderContext();
  const orderSummary = getOrderSummarySelector(state);
  const orderTotal = getOrderTotalSelector(state);

  const router = useRouter();

  function onClickHandler() {
    router.push(routeConstants.orderCheckout);
  }
  return (
    <>
      <PageTitle />
      <Layout.FullPage>
        <NavBar showBack showHome />
        <Layout.Content showBottomBar>
          <GradientBg height="162px" />
          <ConfirmOrder orderSummary={orderSummary} orderTotal={orderTotal} />
        </Layout.Content>
        <BottomBar>
          <FullWidth onClick={onClickHandler}>Confirm Order</FullWidth>
        </BottomBar>
      </Layout.FullPage>
    </>
  );
}
