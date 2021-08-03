import styled, { css } from "styled-components";

import Colors from "/elements/shared/Colors";
import ReceiptIcon from "elements/shared/Icons/ReceiptIcon";
import { Header1, Header4, PreTitle } from "/elements/shared/TextStyles";
import { BaseButton } from "elements/shared/Button";

const StyledReceiptIcon = styled(ReceiptIcon)`
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

// Invoice card
const InvoiceCardHeader = styled.div`
  padding-top: 38px;
  padding-bottom: 26px;

  display: flex;
  text-align: center;
  justify-content: space-between;
`;

const TitleText = styled(PreTitle)``;

const ContentText = styled(Header4)`
  color: ${Colors.red};
`;

const DueValue = styled(ContentText)`
  &::before {
    content: "$ ";
  }
`;

const InvoiceCardBody = styled.div`
  padding-top: 26px;
  padding-bottom: 38px;
`;

const inActiveDotStyle = css`
  background-color: ${Colors.lightGray};
  border: 1px solid ${Colors.stroke};
  box-sizing: border-box;
  box-shadow: inset 0px 2px 8px rgba(160, 168, 204, 0.4);
`;

const activeDotStyle = css`
  background: linear-gradient(
      107.9deg,
      rgba(245, 49, 63, 0.5) 1.55%,
      rgba(255, 163, 96, 0.5) 94.08%
    ),
    #f4f3f9;

  border: 1px solid ${Colors.red};
  box-sizing: border-box;
  box-shadow: 0px 6px 25px rgba(245, 49, 63, 0.4);
`;

const DotContainer = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  ${({ isDone }) => (isDone ? activeDotStyle : inActiveDotStyle)}
`;

const StepText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 15px;
  color: ${Colors.purple};

  ${({ isDone }) =>
    isDone &&
    css`
      font-weight: 500;
    `}
`;

// Cashback banner
const BannerContainer = styled(BaseButton)`
  background: rgba(222, 243, 225, 0.5);
  border: 0.5px solid #57c168;
  box-sizing: border-box;
  box-shadow: 0px 4px 15px rgba(218, 218, 229, 0.2);
  border-radius: 20px;

  height: 82px;
  width: 100%;

  display: grid;
  grid-template-columns: 80px 1fr 56px;
  grid-template-areas: "icon label arrow";
  overflow: hidden;

  margin-bottom: 40px;
`;

const IconContainer = styled.div`
  grid-area: icon;
  justify-self: center;
`;

const IconWrapper = styled.div`
  background-color: #def3e1;
  border: 1px solid #57c168;
  box-shadow: 0px 6px 25px rgba(87, 193, 104, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabelContainer = styled.div`
  grid-area: label;
  justify-self: flex-start;
  text-align: left;
`;

const ArrowContainer = styled.div`
  grid-area: arrow;
  background: rgba(87, 193, 104, 0.2);
  border-left: 0.5px solid #57c168;
  align-self: stretch;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CashBackBannerTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #57c168;
`;

const CashBackText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: ${Colors.purple};
`;

export {
  StyledReceiptIcon,
  HeaderTitle,
  Container,
  // invoice card
  InvoiceCardHeader,
  TitleText,
  ContentText,
  DueValue,
  InvoiceCardBody,
  DotContainer,
  StepText,
  // banner container
  BannerContainer,
  IconContainer,
  IconWrapper,
  LabelContainer,
  ArrowContainer,
  CashBackBannerTitle,
  CashBackText,
};
