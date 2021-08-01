import { FullPageWrapper, ContentContainer } from "./styles";

const FullPage = (props) => <FullPageWrapper {...props} />;

const Content = ({ showBottomBar, ...props }) => (
  <ContentContainer showBottomBar={showBottomBar} {...props} />
);

const Layout = {
  FullPage,
  Content,
};

export default Layout;
