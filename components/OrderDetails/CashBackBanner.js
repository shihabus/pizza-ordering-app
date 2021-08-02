import Layout from "/elements/shared/Layout";
import CharityBagIcon from "elements/shared/Icons/CharityBagIcon";
import ArrowIcon from "elements/shared/Icons/ArrowIcon";

import {
  BannerContainer,
  IconContainer,
  IconWrapper,
  LabelContainer,
  ArrowContainer,
  CashBackBannerTitle,
  CashBackText,
} from "./styles";

const CharityIcon = () => (
  <IconWrapper>
    <CharityBagIcon />
  </IconWrapper>
);

export default function CashBackBanner() {
  return (
    <Layout.PaddedContainer>
      <BannerContainer>
        <IconContainer>
          <CharityIcon />
        </IconContainer>
        <LabelContainer>
          <CashBackBannerTitle>Earned cashback!</CashBackBannerTitle>
          <CashBackText>+ $1.45</CashBackText>
        </LabelContainer>
        <ArrowContainer>
          <ArrowIcon />
        </ArrowContainer>
      </BannerContainer>
    </Layout.PaddedContainer>
  );
}
