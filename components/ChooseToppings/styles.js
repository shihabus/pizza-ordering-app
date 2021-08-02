import styled from "styled-components";

import { PreTitle } from "elements/shared/TextStyles";
import Slider from "elements/shared/Slider";
import Checkbox from "elements/shared/Checkbox";
import Colors from "elements/shared/Colors";

const SliderTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.3px;

  color: ${Colors.purple};
`;

const SubTitle = styled(PreTitle)`
  color: ${Colors.lightPurple};
`;

const StyledSlider = styled(Slider)`
  top: 180px;
`;

// Topping Card
const Card = styled.div`
  background-color: ${Colors.white};
  border: 0.5px solid ${Colors.stroke};
  box-sizing: border-box;
  box-shadow: 0px 4px 15px rgba(218, 218, 229, 0.7);
  border-radius: 20px;
  width: 230px;
  height: 76px;
  padding: 0px 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > :first-child {
    margin-right: 12px;
  }
`;

const CTAContainer = styled.div`
  padding-left: 12px;
  display: grid;
  grid-template-columns: 90px 20px;
  grid-row-gap: 4px;
  grid-auto-flow: row;
  grid-template-areas:
    "title title"
    "price cta";
`;

const Title = styled.p`
  grid-area: title;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: ${Colors.purple};
`;

const Price = styled.p`
  grid-area: price;
  align-self: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: ${Colors.purple};
`;

const CTA = styled.div`
  grid-area: cta;
  justify-self: center;
`;

const StyledCheckbox = styled(Checkbox)`
  width: 20px;
  height: 20px;
`;

export {
  SliderTitle,
  SubTitle,
  StyledSlider,
  Card,
  CTAContainer,
  Title,
  Price,
  CTA,
  StyledCheckbox,
};
