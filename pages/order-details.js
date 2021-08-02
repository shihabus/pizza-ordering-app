import GradientBg from "elements/shared/GradientBg";
import OrderDetails from "/components/OrderDetails";
import NavBar from "/components/shared/NavBar";
import PageTitle from "/components/shared/PageTitle";
import Layout from "/elements/shared/Layout";

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
