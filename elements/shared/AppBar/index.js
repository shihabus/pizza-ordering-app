import { useRouter } from "next/router";
import Link from "next/link";

import HomeIcon from "elements/shared/Icons/HomeIcon";
import BackIcon from "elements/shared/Icons/BackIcon";

import { Nav, NavWrapper, Left, Right, Title, NavButton } from "./styles";

function Home() {
  return (
    <Link href="/" passHref>
      <NavButton>
        <HomeIcon />
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
