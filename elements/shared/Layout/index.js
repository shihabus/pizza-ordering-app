import { FullPageWrapper, ContentContainer, PaddedBox } from "./styles";

const FullPage = (props) => <FullPageWrapper {...props} />;

const Content = ({ showBottomBar, ...props }) => (
  <ContentContainer showBottomBar={showBottomBar} {...props} />
);

const PaddedContainer = (props) => <PaddedBox {...props} />;

const Layout = {
  FullPage,
  Content,
  PaddedContainer,
};

export default Layout;
