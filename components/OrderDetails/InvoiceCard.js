import { useOrderContext } from "hooks/orderContext";
import { getOrderTotalSelector } from "hooks/orderContext/selectors";
import { toPriceLabel } from "Utils/helperUtils";

import Layout from "elements/shared/Layout";
import { Card, Section, Separator } from "elements/shared/Card";

import OrderStatus from "./OrderStatus";
import {
  InvoiceCardHeader,
  InvoiceCardBody,
  TitleText,
  ContentText,
  DueValue,
} from "./styles";

const HeaderSection = () => {
  const [state] = useOrderContext();
  const total = getOrderTotalSelector(state);
  const data = "14 Feb";
  const invoiceId = "#15569b";

  return (
    <Section>
      <InvoiceCardHeader>
        <div>
          <TitleText>Ordered on</TitleText>
          <ContentText>{data}</ContentText>
        </div>
        <div>
          <TitleText>Invoice #</TitleText>
          <ContentText>{invoiceId}</ContentText>
        </div>
        <div>
          <TitleText>total due</TitleText>
          <DueValue>{toPriceLabel(total)}</DueValue>
        </div>
      </InvoiceCardHeader>
    </Section>
  );
};

const TimeLineSection = () => (
  <Section>
    <InvoiceCardBody>
      <OrderStatus />
    </InvoiceCardBody>
  </Section>
);

export default function InvoiceCard() {
  return (
    <Layout.PaddedContainer>
      <Card>
        <HeaderSection />
        <Separator />
        <TimeLineSection />
      </Card>
    </Layout.PaddedContainer>
  );
}
