import styled, { css } from "styled-components";

import { Card } from "elements/shared/Card";
import {
  BodyText,
  Header1,
  Header3,
  PreTitle,
} from "elements/shared/TextStyles";
import Colors from "elements/shared/Colors";
import CartIcon from "elements/shared/Icons/CartIcon";
import ImageWithLoader from "elements/shared/ImageWithLoader";

const BlurredBorder = styled.div`
  --blurred-border-width: 540px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  width: var(--blurred-border-width);
  height: var(--blurred-border-width);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  text-align: center;
  left: 0;
  right: 0;
  transform: translate(10%, -15%);
`;

const PizzaImage = styled(ImageWithLoader)`
  border-radius: 50%;
  width: 440px;
  height: 440px;
`;

const Plate = styled.div`
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background-color: ${Colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(218, 218, 229, 0.2);
`;

const OrderSummary = styled(Card)`
  position: absolute;
  top: 246px;
  bottom: 0;
  left: 0;
  width: 285px;
  margin: 0 auto;
  transform: translateX(-20px);
`;

const ContentContainer = styled.div`
  padding: 18px 0px;
  padding-left: 20px;
`;

const CardTitle = styled(PreTitle)`
  color: ${Colors.red};
`;

const HeaderContainer = styled(ContentContainer)`
  padding-top: 44px;
`;

const ItemsContainer = styled(ContentContainer)`
  & > div {
    padding: 2px 0px;
  }
`;

const PriceContainer = styled(ContentContainer)`
  padding-top: 18px;
  padding-bottom: 44px;
`;

const priceStyle = css`
  &::before {
    content: "$ ";
  }
`;

const OrderItemPrice = styled(PreTitle)`
  ${priceStyle}
`;

const OrderItemLabel = styled(BodyText)`
  text-transform: capitalize;
`;

const OrderTotalPrice = styled(Header3)`
  ${priceStyle}
`;

const LineItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled(Header1)`
  color: ${Colors.white};
`;

const StyledCartIcon = styled(CartIcon)`
  fill: ${Colors.red};
`;

export {
  BlurredBorder,
  PizzaImage,
  Plate,
  OrderSummary,
  HeaderContainer,
  ItemsContainer,
  PriceContainer,
  CardTitle,
  LineItems,
  OrderItemPrice,
  OrderTotalPrice,
  OrderItemLabel,
  HeaderTitle,
  StyledCartIcon,
};
