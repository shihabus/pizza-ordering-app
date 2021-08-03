import { useRouter } from "next/router";

import { routeConstants } from "constants/routeConstants";

import NavBar from "components/shared/NavBar";
import PageTitle from "components/shared/PageTitle";
import Checkout from "components/Checkout";

import Layout from "elements/shared/Layout";
import GradientBg from "elements/shared/GradientBg";
import BottomBar from "elements/shared/BottomBar";
import { FullWidth } from "elements/shared/Button";

function CheckoutPage() {
  const router = useRouter();

  function clickHandler() {
    router.push(routeConstants.orderDetails);
  }
  return (
    <>
      <PageTitle />
      <Layout.FullPage>
        <NavBar showBack showHome />
        <Layout.Content showBottomBar>
          <GradientBg height="180px" />
          <Checkout />
        </Layout.Content>
        <BottomBar>
          <FullWidth onClick={clickHandler}>Place Order</FullWidth>
        </BottomBar>
      </Layout.FullPage>
    </>
  );
}

export default CheckoutPage;
