import styled from "styled-components";

import Layout from "elements/shared/Layout";
import Colors from "elements/shared/Colors";

const PositionedContainer = styled(Layout.PaddedContainer)`
  position: relative;
  top: 230px;
  padding-bottom: 40px;
`;

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.3px;

  color: ${Colors.purple};
`;

export { PositionedContainer, Title };
