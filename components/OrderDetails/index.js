import { SectionTitle } from "components/shared/SectionTitle/styles";
import CashBackBanner from "./CashBackBanner";
import InvoiceCard from "./InvoiceCard";

import { StyledReceiptIcon, HeaderTitle, Container } from "./styles";

export default function OrderDetails() {
  return (
    <>
      <SectionTitle>
        <StyledReceiptIcon />
        <HeaderTitle>Order Details</HeaderTitle>
      </SectionTitle>
      <Container>
        <InvoiceCard />
        <CashBackBanner />
      </Container>
    </>
  );
}
