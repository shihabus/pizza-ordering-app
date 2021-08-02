import styled from "styled-components";

import CartIcon from "elements/shared/Icons/CartIcon";
import LocationIcon from "elements/shared/Icons/LocationIcon";
import Colors from "/elements/shared/Colors";
import { Header1, Header4, PreTitle } from "/elements/shared/TextStyles";
import IconButton from "elements/shared/IconButton";
import WalletIcon from "elements/shared/Icons/WalletIcon";

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
  top: 15%;
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

const LineItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardHeader = styled(Header4)`
  color: #f5313f;
`;

const BoldText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #6d6e9c;
`;

const BodyText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 15px;
  color: #6d6e9c;
`;

const StyledLocationIcon = styled(LocationIcon)`
  fill: #f5313f;
  margin-right: 8px;
`;

const StyledWalletIcon = styled(WalletIcon)`
  fill: #f5313f;
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
  background: #def3e1;
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
  BodyText,
  CardHeader,
  StyledLocationIcon,
  StyledIconButton,
  PaymentCardContainer,
  StyledWalletIcon,
  CashbackText,
  VisaContainer,
};
