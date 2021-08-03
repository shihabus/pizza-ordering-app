import styled from "styled-components";

import LocationIcon from "elements/shared/Icons/LocationIcon";
import Colors from "elements/shared/Colors";
import { Header1, Header4, PreTitle } from "elements/shared/TextStyles";
import CartIcon from "elements/shared/Icons/CartIcon";
import IconButton from "elements/shared/IconButton";
import WalletIcon from "elements/shared/Icons/WalletIcon";

// Delivery Address Card
const StyledCartIcon = styled(CartIcon)`
  fill: white;
  width: 28px;
  height: 30px;
`;

const HeaderTitle = styled(Header1)`
  color: ${Colors.white};
`;

const Container = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 115px;
  & > :first-child {
    margin-bottom: 30px;
  }
`;

const ContentContainer = styled.div`
  padding: 18px 0px;
  padding-left: 10px;
`;

const HeaderContainer = styled(ContentContainer)`
  padding-top: 30px;
`;

const ContactLessDeliveryContainer = styled(ContentContainer)`
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

// Payment Card
const LineItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardHeader = styled(Header4)`
  color: ${Colors.red};
`;

const BoldText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: ${Colors.purple};
`;

const PriceValue = styled(BoldText)`
  &::before {
    content: "$ ";
  }
`;

const BodyText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 15px;
  color: ${Colors.purple};
`;

const StyledLocationIcon = styled(LocationIcon)`
  fill: ${Colors.red};
  margin-right: 8px;
`;

const StyledWalletIcon = styled(WalletIcon)`
  fill: ${Colors.red};
  margin-right: 8px;
`;

const StyledIconButton = styled(IconButton)`
  width: 25px;
  height: 25px;
`;

const PaymentCardContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const CashbackText = styled(PreTitle)`
  background-color: #def3e1;
  border-radius: 10px;
  color: #57c168;
  padding: 8px 16px !important;
`;

const VisaContainer = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 6px;
  & > :last-child {
    margin-left: 8px;
  }
`;

export {
  StyledCartIcon,
  HeaderTitle,
  Container,
  ContentContainer,
  HeaderContainer,
  ContactLessDeliveryContainer,
  LineItemContainer,
  BoldText,
  PriceValue,
  BodyText,
  CardHeader,
  StyledLocationIcon,
  StyledIconButton,
  PaymentCardContainer,
  StyledWalletIcon,
  CashbackText,
  VisaContainer,
};
