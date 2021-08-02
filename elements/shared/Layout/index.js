import styled from "styled-components";

import { Constants, inlineStyles } from "utils/stylesUtil";

import Colors from "elements/shared/Colors";

const FullPage = styled.div`
  height: 100vh;
  /* mobile viewport bug fix */
  height: -webkit-fill-available;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  position: absolute;
  background-color: ${Colors.lightGray};

  top: ${Constants.APP_BAR_HEIGHT};
  bottom: ${({ showBottomBar }) =>
    showBottomBar ? Constants.BOTTOM_BAR_HEIGHT : 0};
  left: 0px;
  right: 0px;

  overflow: hidden;
  overflow-y: auto;

  scroll-padding-bottom: 2em;
`;

const PaddedContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px 20px;
  ${inlineStyles}
`;

const Content = ({ showBottomBar, ...props }) => (
  <ContentContainer showBottomBar={showBottomBar} {...props} />
);

const Layout = {
  FullPage,
  Content,
  PaddedContainer,
};

export default Layout;
