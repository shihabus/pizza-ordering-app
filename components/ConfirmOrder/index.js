import { toPriceLabel } from "Utils/helperUtils";

import SectionTitle from "components/shared/SectionTitle";

import { Section, Separator } from "elements/shared/Card";
import { BodyText } from "elements/shared/TextStyles";
import PizzaIcon from "elements/shared/Icons/PizzaIcon";

import {
  BlurredBorder,
  PizzaImage,
  OrderSummary,
  HeaderContainer,
  CardTitle,
  ItemsContainer,
  PriceContainer,
  LineItems,
  OrderItemPrice,
  OrderTotalPrice,
  OrderItemLabel,
  HeaderTitle,
  StyledCartIcon,
} from "./styles";

const Header = () => (
  <SectionTitle>
    <PizzaIcon />
    <HeaderTitle>
      Check your
      <br />
      <b>custom pizza</b>
    </HeaderTitle>
  </SectionTitle>
);

function TotalPriceSection({ orderTotal }) {
  return (
    <PriceContainer>
      <LineItems>
        <BodyText>Total</BodyText>
        <OrderTotalPrice>{toPriceLabel(orderTotal)}</OrderTotalPrice>
      </LineItems>
    </PriceContainer>
  );
}

function CartItemSummary({ orderSummary }) {
  return (
    <ItemsContainer>
      {orderSummary.map((orderItem) => (
        <LineItems key={orderItem}>
          <OrderItemLabel>{orderItem.label}</OrderItemLabel>
          <OrderItemPrice>{toPriceLabel(orderItem.cost)}</OrderItemPrice>
        </LineItems>
      ))}
    </ItemsContainer>
  );
}

function ConfirmOrder({ orderTotal, orderSummary }) {
  return (
    <>
      <Header />
      <BlurredBorder>
        <PizzaImage src="/assets/images/pizzaWithToppings.png" />
      </BlurredBorder>
      <OrderSummary>
        <Section>
          <HeaderContainer>
            <StyledCartIcon />
            <CardTitle>Order Summary</CardTitle>
          </HeaderContainer>
        </Section>
        <Separator />
        <Section>
          <CartItemSummary orderSummary={orderSummary} />
        </Section>
        <Separator />
        <Section>
          <TotalPriceSection orderTotal={orderTotal} />
        </Section>
      </OrderSummary>
    </>
  );
}

export default ConfirmOrder;
