import styled from "styled-components";
import { Colors } from "elements/shared/Colors";

const TextBase = styled.p`
  font-family: Roboto;
  padding: 0 !important;
  margin: 0 !important;
`;

const Title = styled(TextBase)`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: -0.3px;

  color: ${Colors.purple};
`;

const Header1 = Title;

const Header2 = styled(TextBase)`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: -0.3px;

  color: ${Colors.purple};
`;

const Header3 = styled(TextBase)`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.3px;

  color: ${Colors.purple};
`;

const Header4 = styled(TextBase)`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.3px;

  color: ${Colors.purple};
`;

const PreTitle = styled(TextBase)`
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: ${Colors.purple};
`;

const ButtonText = {
  Default: styled(TextBase)`
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.3px;
    text-transform: capitalize;

    color: ${Colors.purple};
  `,
  Selected: styled(TextBase)`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;

    letter-spacing: -0.3px;
    text-transform: capitalize;

    color: ${Colors.purple};
  `,
};

const BodyText = styled(TextBase)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  color: ${Colors.purple};
`;

export {
  Title,
  Header1,
  Header2,
  Header3,
  Header4,
  PreTitle,
  ButtonText,
  BodyText,
};
