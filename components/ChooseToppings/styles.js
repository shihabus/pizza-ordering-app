const { PreTitle } = require("elements/shared/TextStyles");
const { default: styled } = require("styled-components");
import Slider from "elements/shared/Slider";
import Checkbox from "elements/shared/Checkbox";

const SliderTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.3px;

  color: #6d6e9c;
`;

const SubTitle = styled(PreTitle)`
  color: #a0a8cc;
`;

const StyledSlider = styled(Slider)`
  top: 180px;
`;

// ToppingCard
const Card = styled.div`
  background: #ffffff;
  border: 0.5px solid #dadae5;
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
  color: #6d6e9c;
`;

const Price = styled.p`
  grid-area: price;
  align-self: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #6d6e9c;
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
