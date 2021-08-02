import Layout from "/elements/shared/Layout";
import { Card, Section, Separator } from "elements/shared/Card";

import OrderStatus from "./OrderStatus";

import {
  InvoiceCardHeader,
  InvoiceCardBody,
  TitleText,
  ContentText,
} from "./styles";

const HeaderSection = () => {
  const data = "14 Feb";
  const invoiceId = "#15569b";
  const total = "$14.50";

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
          <ContentText>{total}</ContentText>
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
