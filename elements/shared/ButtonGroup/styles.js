import styled from "styled-components";

import Colors from "elements/shared/Colors";

const Card = styled.div`
  background-color: ${Colors.white};
  box-shadow: 0px 4px 15px rgba(218, 218, 229, 0.2);
  border-radius: 20px;
  padding: 26px 34px 34px;
`;

const Title = styled.p`
  text-align: center;
  margin-bottom: 22px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export { Card, Title, ButtonContainer };
