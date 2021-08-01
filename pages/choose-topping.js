import { useState } from "react";

import NavBar from "components/shared/NavBar";
import PageTitle from "components/shared/PageTitle";
import GradientBg from "elements/shared/GradientBg";
import Layout from "elements/shared/Layout";
import BottomBar from "elements/shared/BottomBar";
import { FullWidth } from "elements/shared/Button";
import ChooseTopping from "components/ChooseToppings";

export default function ChooseToppingPage() {
  const [toppings, setToppings] = useState([]);

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
          <FullWidth>Next</FullWidth>
        </BottomBar>
      </Layout.FullPage>
    </>
  );
}
