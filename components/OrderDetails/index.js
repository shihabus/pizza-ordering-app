import SectionTitle from "components/shared/SectionTitle";

import CashBackBanner from "./CashBackBanner";
import InvoiceCard from "./InvoiceCard";
import { StyledReceiptIcon, HeaderTitle, Container } from "./styles";

function OrderDetails() {
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

export default OrderDetails;
