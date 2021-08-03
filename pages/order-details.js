import OrderDetails from "components/OrderDetails";
import NavBar from "components/shared/NavBar";
import PageTitle from "components/shared/PageTitle";

import GradientBg from "elements/shared/GradientBg";
import Layout from "elements/shared/Layout";

function OrderDetailsPage() {
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

export default OrderDetailsPage;
