import { FullPage, ContentContainer, PaddedContainer } from "./styles";

const Content = ({ showBottomBar, ...props }) => (
  <ContentContainer showBottomBar={showBottomBar} {...props} />
);

const Layout = {
  FullPage,
  Content,
  PaddedContainer,
};

export default Layout;
