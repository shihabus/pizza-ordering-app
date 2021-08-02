import Image from "next/image";

import Layout from "elements/shared/Layout";
import { Card, Section } from "elements/shared/Card";
import EditIcon from "elements/shared/Icons/EditIcon";
import { PreTitle } from "elements/shared/TextStyles";

import {
  LineItemContainer,
  BoldText,
  BodyText,
  CardHeader,
  StyledIconButton,
  PaymentCardContainer,
  StyledWalletIcon,
  CashbackText,
  VisaContainer,
} from "./styles";

const EditButton = () => (
  <StyledIconButton>
    <EditIcon width="12" height="12" />
  </StyledIconButton>
);

const Header = () => (
  <LineItemContainer>
    <LineItemContainer>
      <StyledWalletIcon />
      <CardHeader>Payment method</CardHeader>
    </LineItemContainer>
    <EditButton />
  </LineItemContainer>
);

const CardInfo = () => (
  <VisaContainer>
    <Image
      src="/assets/images/visa.png"
      width="28"
      height="28"
      alt="visa card icon"
    />
    <div>
      <PreTitle>Visa</PreTitle>
      <BodyText>....0145</BodyText>
    </div>
  </VisaContainer>
);

function PaymentCard() {
  return (
    <Layout.PaddedContainer>
      <Card>
        <Section>
          <PaymentCardContainer>
            <Header />
            <LineItemContainer>
              <div>
                <CardInfo />
                <CashbackText>10% Cashback Applied</CashbackText>
              </div>
              <BoldText>$ 14.50</BoldText>
            </LineItemContainer>
          </PaymentCardContainer>
        </Section>
      </Card>
    </Layout.PaddedContainer>
  );
}

export default PaymentCard;
