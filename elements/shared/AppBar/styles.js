import styled from "styled-components";

import { Constants } from "utils/stylesUtil";

import { ButtonText } from "elements/shared/TextStyles";
import { BaseButton } from "elements/shared/Button";
import Colors from "elements/shared/Colors";

const Nav = styled.nav`
  padding: 0 20px;

  background-color: ${Colors.white};
  border: 0.25px solid ${Colors.stroke};

  height: ${Constants.APP_BAR_HEIGHT};
`;

const NavWrapper = styled.ul`
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;

  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-areas: "left middle right";
  justify-items: center;
  align-content: center;
`;

const NavItem = styled.li`
  display: flex;
  min-width: 34px;
`;

const Left = styled(NavItem)`
  grid-area: left;
  & > * {
    margin-right: 6px;
  }
`;

const Right = styled(NavItem)`
  grid-area: right;

  & > * {
    margin-left: 6px;
  }
`;

const Title = styled(ButtonText.Default)`
  grid-area: middle;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavButton = styled(BaseButton)`
  padding: 6px;
  background: none;
`;

export { Nav, NavWrapper, Left, Right, Title, NavButton };
