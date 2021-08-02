import React from "react";
import SectionTitle from "/components/shared/SectionTitle";

import DeliveryAddressCard from "./DeliveryAddressCard";
import PaymentCard from "./PaymentCard";
import { StyledCartIcon, HeaderTitle, Container } from "./styles";

export default function Checkout() {
  return (
    <>
      <SectionTitle>
        <StyledCartIcon />
        <HeaderTitle>Checkout</HeaderTitle>
      </SectionTitle>
      <Container>
        <DeliveryAddressCard />
        <PaymentCard />
      </Container>
    </>
  );
}
