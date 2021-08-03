import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

import { routeConstants } from "constants/routeConstants";
import HomeIcon from "elements/shared/Icons/HomeIcon";
import BackIcon from "elements/shared/Icons/BackIcon";
import Colors from "elements/shared/Colors";

import { Nav, NavWrapper, Left, Right, Title, NavButton } from "./styles";

function Home() {
  return (
    <Link href={routeConstants.chooseSize} passHref>
      <NavButton>
        <HomeIcon fill={Colors.purple} />
      </NavButton>
    </Link>
  );
}

function BackButton() {
  const router = useRouter();
  return (
    <NavButton onClick={() => router.back()}>
      <BackIcon />
    </NavButton>
  );
}

function AppBar({ title, showHome, showBack, left, right }) {
  return (
    <Nav>
      <NavWrapper>
        <Left>
          {showBack && <BackButton />}
          {left}
        </Left>
        <Title>{title}</Title>
        <Right>
          {right}
          {showHome && <Home />}
        </Right>
      </NavWrapper>
    </Nav>
  );
}

export default AppBar;

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  showHome: PropTypes.bool,
  showBack: PropTypes.bool,
  left: PropTypes.node,
  right: PropTypes.node,
};

AppBar.defaultProps = {
  showHome: false,
  showBack: false,
  left: <></>,
  right: <></>,
};
