import Layout from "elements/shared/Layout";
import { Card, Section, Separator } from "elements/shared/Card";
import EditIcon from "elements/shared/Icons/EditIcon";
import Toggle from "elements/shared/Toggle";

import {
  HeaderContainer,
  ContactLessDeliveryContainer,
  ContentContainer,
  LineItemContainer,
  BoldText,
  BodyText,
  CardHeader,
  StyledLocationIcon,
  StyledIconButton,
} from "./styles";

const EditButton = () => (
  <StyledIconButton>
    <EditIcon width="12" height="12" />
  </StyledIconButton>
);

const Header = () => (
  <HeaderContainer>
    <LineItemContainer>
      <LineItemContainer>
        <StyledLocationIcon />
        <CardHeader>Delivery Address</CardHeader>
      </LineItemContainer>
      <EditButton />
    </LineItemContainer>
    <div>
      <BoldText>Home</BoldText>
      <BodyText>3728 Brand Road, Swift Current</BodyText>
    </div>
  </HeaderContainer>
);

const Footer = () => (
  <ContactLessDeliveryContainer>
    <div>
      <BoldText>Contactless Delivery:</BoldText>
      <BodyText>Rider will place order at your door</BodyText>
    </div>
    <Toggle width="38px" height="20px" />
  </ContactLessDeliveryContainer>
);

const DeliveryAddressCard = () => (
  <Layout.PaddedContainer>
    <Card>
      <Section>
        <Header />
      </Section>
      <Separator />
      <Section>
        <ContentContainer>
          <BoldText>+ Add Address</BoldText>
        </ContentContainer>
      </Section>
      <Separator />
      <Section>
        <Footer />
      </Section>
    </Card>
  </Layout.PaddedContainer>
);

export default DeliveryAddressCard;
