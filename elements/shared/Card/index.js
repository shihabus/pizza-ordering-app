import styled from "styled-components";

import { inlineStyles } from "Utils/stylesUtil";
import Colors from "elements/shared/Colors";

const Card = styled.div`
  & > div {
    padding: 0px 24px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
  }
  & > div:first-child {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
  & > div:last-child {
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  ${inlineStyles}
`;

const Separator = styled.hr`
  border: none;
  border-top: 0.5px solid ${Colors.stroke};
`;

const Section = (props) => <div {...props} />;

export { Card, Section, Separator };
