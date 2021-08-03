import GradientBg from "elements/shared/GradientBg";
import Layout from "elements/shared/Layout";

import OrderDetails from "components/OrderDetails";
import NavBar from "components/shared/NavBar";
import PageTitle from "components/shared/PageTitle";

export default function OrderDetailsPage() {
  return (
    <>
      <PageTitle />
      <Layout.FullPage>
        <NavBar showBack showHome />
        <Layout.Content>
          <GradientBg height="162px" />
          <OrderDetails />
        </Layout.Content>
      </Layout.FullPage>
    </>
  );
}
