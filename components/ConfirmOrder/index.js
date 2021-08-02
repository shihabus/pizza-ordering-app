import React from "react";

import { Section, Separator } from "elements/shared/Card";

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
import { BodyText } from "/elements/shared/TextStyles";
import SectionTitle from "/components/shared/SectionTitle";
import PizzaIcon from "elements/shared/Icons/PizzaIcon";

const toPrice = (price) => parseFloat(price).toFixed(2);

export default function App({ orderTotal, orderSummary }) {
  function CartItemSummary() {
    return (
      <ItemsContainer>
        {orderSummary.map((orderItem) => (
          <LineItems key={orderItem}>
            <OrderItemLabel>{orderItem.label}</OrderItemLabel>
            <OrderItemPrice>{toPrice(orderItem.cost)}</OrderItemPrice>
          </LineItems>
        ))}
      </ItemsContainer>
    );
  }
  return (
    <>
      <SectionTitle>
        <PizzaIcon />
        <HeaderTitle>
          Check your
          <br />
          <b>custom pizza</b>
        </HeaderTitle>
      </SectionTitle>
      <BlurredBorder>
        <PizzaImage src="/assets/images/thickCrust w_ toppings_w_ toppings 02 1.png" />
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
          <CartItemSummary />
        </Section>
        <Separator />
        <Section>
          <PriceContainer>
            <LineItems>
              <BodyText>Total</BodyText>
              <OrderTotalPrice>{toPrice(orderTotal)}</OrderTotalPrice>
            </LineItems>
          </PriceContainer>
        </Section>
      </OrderSummary>
    </>
  );
}
